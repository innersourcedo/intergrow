# Generated by Django 3.0.2 on 2020-03-07 05:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TeamWork', '0013_auto_20200306_1522'),
    ]

    operations = [
        migrations.AlterField(
            model_name='help',
            name='help_date',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='response',
            name='response_date',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]