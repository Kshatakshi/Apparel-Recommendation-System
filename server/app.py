from flask import Flask, request
from flask_restful import Api, Resource
import os 

from BagOfWords import bag_of_words_model
from word2vec import weighted_w2v_model
# from CNN import get_similar_products_cnn


app = Flask(__name__)
api = Api(app)

class BOW(Resource):
    def post(self):
        data = bag_of_words_model(request.form['title'],5)
        # data = bag_of_words_model(request.json['title'],5)
        return {"data": data}

class W2V(Resource):
    def post(self):
        data = weighted_w2v_model(request.form['title'],5)
        print(data)
        # data = weighted_w2v_model(request.json['title'],5)
        return {"data": data}

# class CNN(Resource):
#     def post(self):
#         id = int(os.path.splitext(request.files['file'].filename)[0])
#         print(id)
#         data = get_similar_products_cnn(id,5)
#         print(data)
#         # data = weighted_w2v_model(request.json['title'],5)
#         return {"data": data}

api.add_resource(BOW, "/BOW")        
api.add_resource(W2V, "/W2V")   
# api.add_resource(CNN, "/CNN")        


if __name__ == "__main__":
    app.run(debug=True)


