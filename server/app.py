from flask import Flask, request
from flask_restful import Api, Resource
import os 
from flask_cors import CORS, cross_origin




from BagOfWords import bag_of_words_model
from word2vec import weighted_w2v_model
from CNN import get_similar_products_cnn


app = Flask(__name__)
CORS(app)
#cors = CORS(app, resources={r"/BOW": {"origins": "http://localhost:5000"}})
app.config['CORS_HEADERS'] = 'Content-Type'
api = Api(app)


class BOW(Resource):
    def post(self):
      # data = bag_of_words_model(request.json['title'],5)
         
      #  data = request.get_json(silent=True)
       
        data = bag_of_words_model(request.json['title'],9)
        print(data)
        return {"data": data}

class W2V(Resource):
    def post(self):
    #  data = weighted_w2v_model(request.form['title'],5)
        
        data = weighted_w2v_model(request.json['title'],9)
        print(data)
        return {"data": data}

class CNN(Resource):
    def post(self):
        id = int(os.path.splitext(request.files['file'].filename)[0])
        print(id)
        data = get_similar_products_cnn(id,5)
        print(data)
        # data = weighted_w2v_model(request.json['title'],5)
        return {"data": data} 

api.add_resource(BOW, "/BOW",  endpoint='BOW')        
api.add_resource(W2V, "/W2V",  endpoint='W2V')   
api.add_resource(CNN, "/CNN",  endpoint='CNN')        


if __name__ == "__main__":
    app.run(debug=True)


