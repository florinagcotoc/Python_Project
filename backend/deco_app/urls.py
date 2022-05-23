from django.urls import path, re_path
from deco_app.views import ProductsByCategory
from deco_app import views

urlpatterns = [
    path('products/', views.ProductsList.as_view()),
    path('products/<int:pk>/', views.ProductDetail.as_view()),
    re_path('^products/(?P<category>.+)/$', ProductsByCategory.as_view()),
]