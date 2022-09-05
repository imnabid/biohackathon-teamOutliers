from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests, json

@api_view(['GET'])
def get_summary(request):
    r = requests.get('http://www.boldsystems.org/index.php/API_Public/stats?geo=Nepal')
    return Response(r.json())

@api_view(['POST'])
def get_specimen_data(request):
    query = request.data.get('search')
    r = requests.get(f'http://www.boldsystems.org/index.php/API_Public/combined?taxon={query}&geo=Nepal&format=json')
    data = r.json()
    result = []
    for d in data['bold_records']['records'].keys():
        result.append({'code':d,'values':data['bold_records']['records'][d]})
    return Response(result)
