from django.urls import path, include
from rest_framework.routers import DefaultRouter
from world_map_app.views import ContinentViewSet, CountryViewSet, CapitalViewSet

router = DefaultRouter()
router.register("continents", ContinentViewSet, basename="continent")
router.register("countries", CountryViewSet, basename="country")
router.register("capitals", CapitalViewSet, basename="capital")

urlpatterns = [
    path("", include(router.urls)),
]