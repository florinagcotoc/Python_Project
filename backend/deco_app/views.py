from django.contrib.auth import get_user_model
from deco_app.models import Users,Products,Reviews,ShippingAddress,OrderItem,Orders
from deco_app.serializers import UserCreateSerializer,ProductsSerializer,OrdersSerializer,OrderItemSerializer,ReviewsSerializer,ShippingAddressSerializer,ProductByCategorySerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from rest_framework import mixins, generics

User = get_user_model()

class ProductsList(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    
    permission_classes = (AllowAny,)
    
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer


    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)

class ProductsByCategory(generics.ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = ProductByCategorySerializer
    def get_queryset(self):
        category = self.kwargs['category']
        return Products.objects.filter(category=category)
        
class ProductDetail(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    
    permission_classes = (AllowAny,)
    
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer

    def get(self, request, pk):
        return self.retrieve(request, pk)

    def put(self, request, pk):
        return self.update(request, pk)

    def patch(self, request,pk):
        return self.partial_update(request, pk)

    def delete(self, request,pk):
        return self.destroy(request, pk)



