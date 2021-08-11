from rest_framework_jwt.views import obtain_jwt_token
from django.urls import path, include

urlpatterns = [

    path('login/', obtain_jwt_token)
]
