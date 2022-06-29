from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from suscripciones.models import Servicio
from rest_taller.serializers import ServicioSerializer

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

@csrf_exempt
@api_view(['GET','POST'])
@permission_classes((IsAuthenticated,))
def lista_servicio(request):
    if request.method == 'GET':
        listaServicio = Servicio.objects.all()
        serializers = ServicioSerializer(listaServicio, many = True)
        return Response(serializers.data)
    elif request.method == 'POST':
        dataP = JSONParser().parse(request) 
        serializers = ServicioSerializer(data=dataP)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data, status = status.HTTP_201_CREATED)
        else:
            return Response(serializers.errors, status = status.HTTP_400_BAD_REQUEST)

@api_view(['GET','PUT','DELETE'])
@permission_classes((IsAuthenticated,))
def detalle_servicio(request, id):
    try:
        servicio = Servicio.objects.get(idservicio=id)
    except Servicio.DoesNotExist:
        return Response(status = status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        seriaz =  ServicioSerializer(servicio)
        return Response(seriaz.data)
    elif request.method == "PUT":
        dataP = JSONParser().parse(request)
        seriaz = ServicioSerializer(servicio, data=dataP)
        if seriaz.is_valid():
            seriaz.save()
            return Response(seriaz.data)
        else:
            return Response(seriaz.errors, status = status.HTTP_400_BAD_REQUEST)            
    elif request.method == "DELETE":
        servicio.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)
