from django.db import models
from django.db.models.base import Model
from django.contrib.auth.models import User

storage_option = (
    ('1', 'Refrigerate'),
    ('2', 'Freezer'),
    ('3', 'Pantry'),
)

# User
# class FoodList(models.Model):
#     name = models.CharField(max_length=128)
#     user = models.ForeignKey(User, related_name='food_lists', on_delete=models.CASCADE) 

# Food Category
class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Food(models.Model):
    name = models.CharField(max_length=255, null=True)
    storage = models.CharField(max_length=32, choices=storage_option, null=True, blank=True)
    unit = models.CharField(max_length=25, null=True) # come up with predetermine sizing like oz, cups, lbs, gals, etc
    quantity = models.IntegerField(null=True)
    sell_by_date = models.DateField(null=False)
    category = models.ForeignKey(Category, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return f'ID: {self.id} Category: {self.category} Name: {self.name} Storage: {self.storage} Unit: {self.unit} QTY: {self.quantity} Sell By: {self.sell_by_date}'

# Refrigerator/Freezer to add the food in. Much Like the Todo list




