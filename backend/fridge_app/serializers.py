from rest_framework.serializers import ModelSerializer
from fridge_app.models import *

# class FoodListSerializer(ModelSerializer):
#     class Meta:
#         model = FoodList
#         fields = '__all__'


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class FoodSerializer(ModelSerializer):
    class Meta:
        model = Food
        fields = '__all__'
