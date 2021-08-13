from django.db import models
from django.db.models.base import Model
from django.contrib.auth.models import User

class Food(models.Model):
    name = models.CharField(max_length=255, null=True)
    storage = models.CharField(max_length=32, null=True, blank=True)
    sell_by_date = models.DateField(null=False)

    def __str__(self):
        return f'ID: {self.id}  Name: {self.name} Storage: {self.storage} Sell By: {self.sell_by_date}'





