from django.db.models import query
from django.shortcuts import render, redirect
from django.forms import ModelForm
from rest_framework.serializers import Serializer
from django.views.decorators.csrf import csrf_exempt
from .serializers import FoodSerializer
from django.http import JsonResponse
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
        fields = ['name', 'storage', 'sell_by_date']

def get_food(food_id):
    return Food.objects.get(id=food_id)

def food_list(request):
    foods = Food.objects.all()
    data = {'all_foods': foods}
    return render(request, 'foods/food_list.html', data)

@csrf_exempt
def add_food(request):
    if request.method == "POST":
        form = FoodForm(request.POST)
        if form.is_valid():
            food = form.save(commit=True)
            serialized_food = FoodSerializer(food)
            return JsonResponse(data=serialized_food, status=200)



 