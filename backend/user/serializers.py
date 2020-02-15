from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'email',
            'password',
            'kind',
            'created_at'
        )
        model = User