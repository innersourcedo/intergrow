from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    # snippets = serializers.PrimaryKeyRelatedField(many=True, queryset=Snippet.objects.all())

    class Meta:
        model = User
        # fields = ['id', 'username']
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'is_staff', 'is_superuser']