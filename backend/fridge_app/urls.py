from django.urls import path, include
from rest_framework.routers import SimpleRouter
from fridge_app import views

r = SimpleRouter()
r.register('food-list', views.FoodViewSet, basename='food')

urlpatterns = r.urls