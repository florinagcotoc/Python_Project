from django.contrib.auth import get_user_model
from deco_app.models import Users,Products,Reviews,ShippingAddress,OrderItem,Orders
from deco_app.serializers import UserCreateSerializer,ProductsSerializer,OrdersSerializer,OrderItemSerializer,ReviewsSerializer,ShippingAddressSerializer,ProductByCategorySerializer, UserSerializerWithToken
from rest_framework.views import APIView
from rest_framework import mixins, generics
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from deco_app.serializers import MyTokenObtainPairSerializer
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny

User = get_user_model()

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    # get the data from the token because of this decorator, and get the user from the token
    user = request.user
    serializer = UserCreateSerializer(user, many=False)
    return Response(serializer.data)

class UsersList(mixins.ListModelMixin, generics.GenericAPIView):
    permission_classes = (IsAdminUser,)
    queryset = Users.objects.all()
    serializer_class = UserCreateSerializer

    def get(self, request):
        return self.list(request)

class ProductsList(mixins.ListModelMixin, generics.GenericAPIView):
    
    permission_classes = (AllowAny,)
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer
    
    def get(self, request):
        return self.list(request)

class ProductsByCategory(generics.ListAPIView):

    permission_classes = (AllowAny,)
    serializer_class = ProductByCategorySerializer

    def get_queryset(self):
        category = self.kwargs['category']
        return Products.objects.filter(category=category)

class ProductDetail(mixins.RetrieveModelMixin, generics.GenericAPIView):
    
    permission_classes = (AllowAny,)
    
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer

    def get(self, request, pk):
        return self.retrieve(request, pk)

class CreateProduct(mixins.CreateModelMixin, generics.GenericAPIView):
    
    permission_classes = (AllowAny,)
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer

    def post(self, request):
        return self.create(request)


class UpdateProduct(mixins.UpdateModelMixin, generics.GenericAPIView):
    permission_classes = (AllowAny,)
    
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer

    def put(self, request, pk):
        return self.update(request, pk)

    def patch(self, request,pk):
        return self.partial_update(request, pk)


class DestroyProduct(mixins.DestroyModelMixin, generics.GenericAPIView):
    permission_classes = (AllowAny,)
    
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer

    def delete(self, request,pk):
        return self.destroy(request, pk)
