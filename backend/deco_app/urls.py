from django.urls import path, re_path
from deco_app import views

urlpatterns = [
    path('produse/', views.ProductsList.as_view()),
    path('produs/<int:pk>/', views.ProductDetail.as_view()),
    re_path('^produse/(?P<category>.+)/$', views.ProductsByCategory.as_view()),
    path('adauga-produse/', views.CreateProduct.as_view()),
    path('actualizare/produs/<int:pk>/', views.UpdateProduct.as_view()),
    path('stergere/produs/<int:pk>/', views.DestroyProduct.as_view()),
    path('profil/', views.getUserProfile, name='profil'),
    path('actualizare-profil/<int:pk>/', views.UpdateUser.as_view()),
    path('utilizatori/', views.UsersList.as_view()),
]