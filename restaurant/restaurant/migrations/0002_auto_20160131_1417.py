# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-01-31 14:17
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Food_category',
            new_name='FoodCategory',
        ),
    ]
