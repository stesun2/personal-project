from django.urls import path

from . import views

app_name = 'fridge_app'

urlpatterns = [
    path('add_food', views.add_food, name='add_food'),

]
