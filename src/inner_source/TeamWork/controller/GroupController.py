from django.contrib.auth.models import Group

from TeamWork.serializers.groupSerializer import GroupSerializer

# Refactoring to use ViewSets
from rest_framework import viewsets

class GroupViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

