# from gensim.models import Word2Vec
import numpy as np
import pandas as pd
import os 
from sklearn.metrics import pairwise_distances
from sklearn.feature_extraction.text import CountVectorizer
import pickle

dir_path = os.path.dirname(os.path.realpath(__file__))
data = pd.read_pickle(dir_path + "/16k_apparel_data_preprocessed")

with open(dir_path+'/word2vec_model', 'rb') as handle:
    model = pickle.load(handle)

idf_title_vectorizer = CountVectorizer()
idf_title_features = idf_title_vectorizer.fit_transform(data['title'])

# Utility functions

# def get_word_vec(sentence, doc_id, m_name):
#     # sentence : title of the apparel
#     # doc_id: document id in our corpus
#     # m_name: model information it will take two values
#         # if  m_name == 'avg', we will append the model[i], w2v representation of word i
#         # if m_name == 'weighted', we will multiply each w2v[word] with the idf(word)
#     vec = []
#     for i in sentence.split():
#         if i in vocab:
#             if m_name == 'weighted' and i in  idf_title_vectorizer.vocabulary_:
#                 vec.append(idf_title_features[doc_id, idf_title_vectorizer.vocabulary_[i]] * model[i])
#             elif m_name == 'avg':
#                 vec.append(model[i])
#         else:
#             # if the word in our courpus is not there in the google word2vec corpus, we are just ignoring it
#             vec.append(np.zeros(shape=(300,)))
#     # we will return a numpy array of shape (#number of words in title * 300 ) 300 = len(w2v_model[word])
#     # each row represents the word2vec representation of each word (weighted/avg) in given sentance 
#     return  np.array(vec)

# def get_distance(vec1, vec2):
#     # vec1 = np.array(#number_of_words_title1 * 300), each row is a vector of length 300 corresponds to each word in give title
#     # vec2 = np.array(#number_of_words_title2 * 300), each row is a vector of length 300 corresponds to each word in give title
    
#     final_dist = []
#     # for each vector in vec1 we caluclate the distance(euclidean) to all vectors in vec2
#     for i in vec1:
#         dist = []
#         for j in vec2:
#             # np.linalg.norm(i-j) will result the euclidean distance between vectors i, j
#             dist.append(np.linalg.norm(i-j))
#         final_dist.append(np.array(dist))
#     # final_dist = np.array(#number of words in title1 * #number of words in title2)
#     # final_dist[i,j] = euclidean distance between vectors i, j
#     return np.array(final_dist)




# vocab = stores all the words that are there in google w2v model
# vocab = model.wv.vocab.keys() # if you are using Google word2Vec

vocab = model.keys()
# this function will add the vectors of each word and returns the avg vector of given sentance
def build_avg_vec(sentence, num_features, doc_id, m_name):
    # sentace: its title of the apparel
    # num_features: the lenght of word2vec vector, its values = 300
    # m_name: model information it will take two values
        # if  m_name == 'avg', we will append the model[i], w2v representation of word i
        # if m_name == 'weighted', we will multiply each w2v[word] with the idf(word)

    featureVec = np.zeros((num_features,), dtype="float32")
    # we will intialize a vector of size 300 with all zeros
    # we add each word2vec(wordi) to this fetureVec
    nwords = 0
    
    for word in sentence.split():
        nwords += 1
        if word in vocab:
            if m_name == 'weighted' and word in  idf_title_vectorizer.vocabulary_:
                featureVec = np.add(featureVec, idf_title_features[doc_id, idf_title_vectorizer.vocabulary_[word]] * model[word])
            elif m_name == 'avg':
                featureVec = np.add(featureVec, model[word])
    if(nwords>0):
        featureVec = np.divide(featureVec, nwords)
    # returns the avg vector of given sentance, its of shape (1, 300)
    return featureVec



doc_id = 0
w2v_title_weight = []
# for every title we build a weighted vector representation
for i in data['title']:
    w2v_title_weight.append(build_avg_vec(i, 300, doc_id,'weighted'))
    doc_id += 1
# w2v_title = np.array(# number of doc in courpus * 300), each row corresponds to a doc 
w2v_title_weight = np.array(w2v_title_weight)

title_index_map = {k.strip(): v for v, k in enumerate(data["title"])}

def weighted_w2v_model(title, num_results):
    doc_id = title_index_map[title]
    pairwise_dist = pairwise_distances(w2v_title_weight, w2v_title_weight[doc_id].reshape(1,-1))

    # np.argsort will return indices of 9 smallest distances
    indices = np.argsort(pairwise_dist.flatten())[0:num_results]
    #pdists will store the 9 smallest distances
    pdists  = np.sort(pairwise_dist.flatten())[0:num_results]

    #data frame indices of the 9 smallest distace's
    df_indices = list(data.index[indices])
    results = []
    for i in range(0, len(indices)):
        resultObj = {
            "ASIN": data["asin"].loc[df_indices[i]],
            "Brand": data["brand"].loc[df_indices[i]],
            "Title": data["title"].loc[df_indices[i]],
            "medium_image_url": data["medium_image_url"].loc[df_indices[i]],
        }
        results.append(resultObj)
    
    return results

# weighted_w2v_model(12566, 20)