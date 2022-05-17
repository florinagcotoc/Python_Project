# Generated by Django 4.0.4 on 2022-05-17 14:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('deco_app', '0002_rename_product_id_orders_product_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='orderitem',
            old_name='order_id',
            new_name='order',
        ),
        migrations.RenameField(
            model_name='orderitem',
            old_name='product_id',
            new_name='product',
        ),
        migrations.RenameField(
            model_name='reviews',
            old_name='product_id',
            new_name='product',
        ),
        migrations.RenameField(
            model_name='reviews',
            old_name='user_id',
            new_name='user',
        ),
        migrations.RenameField(
            model_name='shippingaddress',
            old_name='order_id',
            new_name='order',
        ),
        migrations.AlterField(
            model_name='products',
            name='stock',
            field=models.IntegerField(),
        ),
    ]