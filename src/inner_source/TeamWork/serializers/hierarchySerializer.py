from rest_framework import serializers
from TeamWork.models import Hierarchy

class HierarchySerializer(serializers.ModelSerializer):

    class Meta:
        model = Hierarchy
        fields = ['hierarchy_name', 'hierarchy_description', 'hierarchy']
