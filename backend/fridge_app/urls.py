from django.urls import path

from . import views

app_name = 'fridge_app'

urlpatterns = [
    path('', views.food_list, name='food_list'),
    # path('<int:food_id>', views.food_view, name=''),
    # path('new', views.food_create, name=''),
    # path('edit/<int:food_id>', views.food_update, name=''),
    # path('delete/<int:food_id>', views.food_delete, name=''),
]
