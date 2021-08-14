from rest_framework.relations import StringRelatedField
from rest_framework.serializers import ModelSerializer, StringRelatedField
from fridge_app.models import *
# from rest_framework import serializers

class FoodSerializer(ModelSerializer):
    class Meta:
        model = Food
        fields = ['id', 'name', 'storage', 'sell_by_date']
        depth = 1

    # user = StringRelatedField()

# Post request to sent to the API