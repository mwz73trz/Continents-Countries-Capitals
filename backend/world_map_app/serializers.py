from rest_framework.serializers import ModelSerializer
from world_map_app.models import Continent, Country, Capital

class ContinentSerializer(ModelSerializer):
    class Meta:
        model = Continent
        fields = ['id', 'name', 'countries']
        depth = 1

class CountrySerializer(ModelSerializer):
    class Meta:
        model = Country
        fields = ['id', 'name', 'capitals']
        depth = 1

class CapitalSerializer(ModelSerializer):
    class Meta:
        model = Capital
        fields = '__all__'