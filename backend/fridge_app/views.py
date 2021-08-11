from django.db.models import query
from django.shortcuts import render, redirect
from django.forms import ModelForm
from rest_framework.serializers import Serializer
from fridge_app.models import *

# from rest_framework.viewsets import ModelViewSet
# from fridge_app.serializers import *
# from fridge_app.models import *

# class FoodListViewSet(ModelViewSet):
#     queryset = FoodList.objects.all()
#     serializer_class = FoodListSerializer

# class CategoryViewSet(ModelViewSet):
#     queryset = Category.objects.all()
#     serializer_class = CategorySerializer

# class FoodViewSet(ModelViewSet):
#     queryset = Food.objects.all()
#     serializer_class = FoodSerializer

class FoodForm(ModelForm):
    class meta:
        model = Food
        fields = ['category', 'name', 'storage', 'unit', 'quantity', 'sell_by_date']

def get_food(food_id):
    return Food.objects.get(id=food_id)

def food_list(request):
    foods = Food.objects.all()
    data = {'all_foods': foods}
    return render(request, 'foods/food_list.html', data)



 