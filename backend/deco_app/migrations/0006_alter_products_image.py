# Generated by Django 4.0.4 on 2022-05-24 08:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('deco_app', '0005_alter_orderitem_order'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='image',
            field=models.ImageField(upload_to='static/images/'),
        ),
    ]
