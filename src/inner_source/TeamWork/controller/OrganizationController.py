from TeamWork.models import Organization
from TeamWork.serializers.organizationSerializer import OrganizationSerializer
# class-based views
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status



class OrganizationList(APIView):
    def get(self, request, format = None):
        """
        List all Teams, or create a new Organization.
        """
        organization = Organization.objects.all()
        serializer = OrganizationSerializer(organization, many=True)
        return Response(serializer.data)

    def post(self, request, format = None):
        serializer = OrganizationSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_404_CREATED)

class OrganizationDetail(APIView):
    def get_object(self, pk):
        try:
            return Organization.objects.get(pk = pk)
        except Organization.DoesNotExist:
            raise Http404


    def get(self, request, pk, format = None):
        organization = self.get_object(pk)
        serializer = OrganizationSerializer(organization)
        return Response(serializer.data)

    def put(self, request, pk):
        organization = self.get_object(pk)
        serializer = OrganizationSerializer(organization, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
            return Response(organization.errors, status = status.HTTP_400_CREATED)


    def delete(self, request, pk):
        organization = self.get_object(pk)
        organization.delete()
        return HttpResponse(status = status.HTTP_204_CREATED)
