'''import numpy as np
from keras.preprocessing.image import ImageDataGenerator
from keras.models import Sequential
from keras.layers import Dropout, Flatten, Dense
from keras import applications
from sklearn.metrics import pairwise_distances
import matplotlib.pyplot as plt
import requests
from PIL import Image
import pandas as pd
import pickle
import os 

dir_path = os.path.dirname(os.path.realpath(__file__))

#load the features and corresponding ASINS info.
bottleneck_features_train = np.load(dir_path + '/16k_data_cnn_features.npy')
asins = np.load(dir_path + '/16k_data_cnn_feature_asins.npy')
asins = list(asins)

# load the original 16K dataset
data = pd.read_pickle(dir_path + "/16k_apparel_data_preprocessed")
df_asins = list(data['asin'])


from IPython.display import display, Image, SVG, Math, YouTubeVideo


#get similar products using CNN features (VGG-16)
def get_similar_products_cnn(doc_id, num_results):
    doc_id = asins.index(df_asins[doc_id])
    pairwise_dist = pairwise_distances(bottleneck_features_train, bottleneck_features_train[doc_id].reshape(1,-1))

    indices = np.argsort(pairwise_dist.flatten())[0:num_results]
    pdists  = np.sort(pairwise_dist.flatten())[0:num_results]
    results = []

    for i in range(len(indices)):
        rows = data[['medium_image_url','title']].loc[data['asin']==asins[indices[i]]]
        for indx, row in rows.iterrows():
            # display(Image(url=row['medium_image_url'], embed=True))
            # print('Product Title: ', row['title'])
            # print('Euclidean Distance from input image:', pdists[i])
            # print('Amazon Url: www.amzon.com/dp/'+ asins[indices[i]])
            resultObj = {
            "ASIN": asins[indices[i]],
            "Title": row['title'],
            "medium_image_url": row["medium_image_url"],
            # "dist": pdists[i],
            }

            results.append(resultObj)

    return results

# get_similar_products_cnn(125, 20) '''