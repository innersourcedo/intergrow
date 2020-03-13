from django.contrib.auth.models import UserGroups

from TeamWork.serializers.userGroupsSerializer import UserGroupsSerializer

# Refactoring to use ViewSets
from rest_framework import viewsets

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class UserGroupsViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = UserGroups.objects.all()
    serializer_class = UserGroupsSerializer

