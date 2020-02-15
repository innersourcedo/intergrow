from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.authtoken.models import Token

class UserSerializer(serializers.ModelSerializer):
    # snippets = serializers.PrimaryKeyRelatedField(many=True, queryset=Snippet.objects.all())
    class Meta:
        model = User
        fields = ['username', 'password','first_name', 'last_name', 'email', 'is_staff', 'is_superuser']

        # hide unwanted presents
        # required used, when create the user password need
        extra_kwargs = {'password':{'write_only' : True, 'required' : False}, 'password':{'required' : False}}

        # override create method
        # when create the user password want to encrypt that mean validate all data
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        # create token
        Token.objects.create(user=user)
        return user