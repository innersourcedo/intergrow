from django.contrib.auth.models import User

from TeamWork.serializers.userSerializer import UserSerializer

# Refactoring to use ViewSets
from rest_framework import viewsets

class UserViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

