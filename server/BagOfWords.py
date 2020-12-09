import numpy as np
import pandas as pd
import os 
from sklearn.metrics import pairwise_distances
from sklearn.feature_extraction.text import CountVectorizer
dir_path = os.path.dirname(os.path.realpath(__file__))

data = pd.read_pickle(dir_path + "/16k_apparel_data_preprocessed")

title_vectorizer = CountVectorizer()
title_features = title_vectorizer.fit_transform(data["title"])
# title_features.get_shape()

title_index_map = {k.strip(): v for v, k in enumerate(data["title"])}
# print( title_index_map['huafeiwude womens cardigan wool waistcoat casual vest black l'])
print(title_index_map)

def bag_of_words_model(title, num_results):
    doc_id = title_index_map[title]
    pairwise_dist = pairwise_distances(title_features, title_features[doc_id])

    # np.argsort will return indices of the smallest distances
    indices = np.argsort(pairwise_dist.flatten())[0:num_results]
    # pdists will store the smallest distances
    pdists = np.sort(pairwise_dist.flatten())[0:num_results]

    # data frame indices of the 9 smallest distace's
    df_indices = list(data.index[indices])
    results = []
    for i in range(0, len(indices)):
        resultObj = {
            "ASIN": data["asin"].loc[df_indices[i]],
            "Brand": data["brand"].loc[df_indices[i]],
            "Title": data["title"].loc[df_indices[i]],
            "medium_image_url": data["medium_image_url"].loc[df_indices[i]],
            "dist": pdists[i],
        }
        results.append(resultObj)
    
    return results

# call the bag-of-words model for a product to get similar products.
# bag_of_words_model("huafeiwude womens cardigan wool waistcoat casual vest black l", 20)
