from django.urls import path, re_path
from deco_app.views import ProductsByCategory
from deco_app import views

urlpatterns = [
    path('produse/', views.ProductsList.as_view()),
    path('produs/<int:pk>/', views.ProductDetail.as_view()),
    re_path('^produse/(?P<category>.+)/$', ProductsByCategory.as_view()),
]