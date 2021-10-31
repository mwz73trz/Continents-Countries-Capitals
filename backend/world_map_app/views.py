from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from world_map_app.serializers import ContinentSerializer, CountrySerializer, CapitalSerializer
from world_map_app.models import Continent, Country, Capital

class ContinentViewSet(ModelViewSet):
    queryset = Continent.objects.all()
    serializer_class = ContinentSerializer

class CountryViewSet(ModelViewSet):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

class CapitalViewSet(ModelViewSet):
    queryset = Capital.objects.all()
    serializer_class = CapitalSerializer
