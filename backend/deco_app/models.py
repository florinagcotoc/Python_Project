from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class UserAccountManager(BaseUserManager):
    
    def create_user(self, username, email, first_name, last_name, password=None):
        """
        Creates and saves a user with a given email, first name, last name and password.
        """
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        user = self.model(username=username, email=email, first_name=first_name, last_name=last_name)

        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, username, email, first_name, last_name, password=None):
        """
        Creates and saves a  superuser with a given email, first name, last name and password.
        """
        user = self.create_user(
            username,
            email,
            first_name,
            last_name,
            password
            )

        user.is_superuser = True
        user.is_staff = True

        user.save(using=self._db)

        return user

class Users(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=255,unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    phone = models.CharField(max_length=10)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name', 'password']

    def get_full_name(self):
        return self.first_name

    def get_short_name(self):
        return self.first_name
    
    def __str__(self):
        return self.email


class Products(models.Model):

    class Category(models.TextChoices):
        Tablouri = 'tablouri'
        Copaci = 'copaci'
        Ceasuri = 'ceasuri'

    product_name = models.CharField(max_length=255, unique=True)
    image = models.ImageField(null=True, blank=True)
    category = models.CharField(max_length=9,choices=Category.choices, default=None)
    description = models.CharField(max_length=1000)
    price = models.DecimalField(max_digits=5,decimal_places=2)
    stock = models.IntegerField()
    createdAt = models.DateTimeField(auto_now=True)
    rating = models.DecimalField(max_digits=5,decimal_places=2)
    nr_reviews = models.IntegerField()


class Orders(models.Model):

    class PaymentMethod(models.TextChoices):
        Ramburs = 'ramburs'
        Card = 'card'

    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    payment_method = models.CharField(max_length = 8, choices=PaymentMethod.choices, default=None)
    shipping_price = models.DecimalField(max_digits=5,decimal_places=2)
    total_price = models.DecimalField(max_digits=5,decimal_places=2)
    is_paid = models.BooleanField(default=False)
    paidAt = models.DateTimeField(auto_now=False)
    createdAt = models.DateTimeField(auto_now=False)
    is_delivered = models.BooleanField(default=False)
    deliveredAt = models.DateTimeField(auto_now=False)


class OrderItem(models.Model):
    order = models.ForeignKey(Orders, on_delete=models.CASCADE)
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=5,decimal_places=2)

class ShippingAddress(models.Model):
    order = models.ForeignKey(Orders, on_delete=models.CASCADE)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    postal_code = models.IntegerField()
    country = models.CharField(max_length=255)
    shipping_price = models.DecimalField(max_digits=5,decimal_places=2)

class Reviews(models.Model):
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    comment = models.CharField(max_length=255)
    createdAt = models.DateTimeField()
    