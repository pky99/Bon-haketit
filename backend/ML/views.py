from django.shortcuts import render
from django.http import JsonResponse

def getFood(request):
    print(request.body)
    return JsonResponse({"status":"ok"})