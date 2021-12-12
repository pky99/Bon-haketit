from django.shortcuts import render
from django.http import JsonResponse


import pandas as pd
import numpy as np
import sklearn
from sklearn.neighbors import NearestNeighbors

df = pd.read_csv('dataset.csv')

from io import StringIO
import json
from dataframe import DataFrame
def getFood(request):
    ob = Recommender()
    data = ob.get_features()

    total_features = data.columns
    d = dict()
    for i in total_features:
        d[i]= 0
    data=json.loads(request.body)
    print("reqq:",request.body)
    sample_input = ['high_protien_diet','gluten_free_diet','diabeties','anemia','calcium','protien']
    sample_input=data

    for i in sample_input:
        try:
            d[i] = 1
        except:
            pass
    final_input = list(d.values())
    results = ob.k_neighbor([final_input]) # pass 2d array []
    buff=StringIO()
    #df is your DataFrame
    
    res=json.loads(results.to_json(orient='index'))
    return JsonResponse(res)

class Recommender:
    
    def __init__(self):
        self.df = pd.read_csv('dataset.csv')
    
    def get_features(self):
        #getting dummies of dataset
        nutrient_dummies = self.df.Nutrient.str.get_dummies()
        disease_dummies = self.df.Disease.str.get_dummies(sep=' ')
        diet_dummies = self.df.Diet.str.get_dummies(sep=' ')
        feature_df = pd.concat([nutrient_dummies,disease_dummies,diet_dummies],axis=1)
     
        return feature_df
    
    def k_neighbor(self,inputs):
        
        feature_df = self.get_features()
        
        #initializing model with k=20 neighbors
        model = NearestNeighbors(n_neighbors=40,algorithm='ball_tree')
        
        # fitting model with dataset features
        model.fit(feature_df)
        
        df_results = pd.DataFrame(columns=list(self.df.columns))
        
      
        # getting distance and indices for k nearest neighbor
        distnaces , indices = model.kneighbors(inputs)

        for i in list(indices):
            df_results = df_results.append(self.df.loc[i])
                
        df_results = df_results.filter(['Name','Nutrient','Veg_Non','Price','Review','Diet','Disease','description'])
        df_results = df_results.drop_duplicates(subset=['Name'])
        df_results = df_results.reset_index(drop=True)
        return df_results

