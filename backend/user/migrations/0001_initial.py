# Generated by Django 3.0.3 on 2020-02-13 13:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.UUIDField(primary_key=True, serialize=False)),
                ('email', models.TextField()),
                ('password', models.TextField()),
                ('kind', models.TextField()),
            ],
        ),
    ]
