from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('food/', include('fridge_app.urls')),
    path('login/', include('fridge_app_auth.urls')),
]
