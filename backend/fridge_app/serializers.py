from rest_framework.serializers import ModelSerializer
from fridge_app.models import Food
# from rest_framework import serializers

class FoodSerializer(ModelSerializer):
    class Meta:
        model = Food
        fields = ('id', 'name', 'storage', 'sell_by_date')


