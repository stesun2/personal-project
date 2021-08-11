from rest_framework.serializers import ModelSerializer
from fridge_app.models import *

class FoodSerializer(ModelSerializer):
    class Meta:
        model = Food
        fields = '__all__'
