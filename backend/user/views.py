from rest_framework import viewsets

from .models import User
from .serializers import UserSerializer

# this is simple setting for viewset
# A viewset that provides default create(), retrieve(), update(), partial_update(), destroy() and list() actions.
class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    
    def get_queryset(self):
        return User.objects.all().order_by("-created_at")
    
    def perform_create(self, serializer):
        return serializer.save()
