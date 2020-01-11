from TeamWork.models import OrgRole
from TeamWork.serializers.orgRoleSerializer import OrgRoleSerializer
# class-based views
from django.http import Http404, HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status



class OrgRoleList(APIView):
    def get(self, request, format = None):
        """
        List all Teams, or create a new OrgRole.
        """
        orgRole = OrgRole.objects.all()
        serializer = OrgRoleSerializer(orgRole, many=True)
        return Response(serializer.data)

    def post(self, request, format = None):
        serializer = OrgRoleSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_404_CREATED)

class OrgRoleDetail(APIView):
    def get_object(self, pk):
        try:
            return OrgRole.objects.get(pk = pk)
        except OrgRole.DoesNotExist:
            raise Http404

    def get(self, request, pk, format = None):
        orgRole = self.get_object(pk)
        serializer = OrgRoleSerializer(orgRole)
        return Response(serializer.data)

    def put(self, request, pk):
        orgRole = self.get_object(pk)
        serializer = OrgRoleSerializer(orgRole, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
            return Response(orgRole.errors, status = status.HTTP_400_CREATED)

    def delete(self, request, pk):
        orgRole = self.get_object(pk)
        orgRole.delete()
        return HttpResponse(status = status.HTTP_204_CREATED)



















# Function basic view
    # from django.http import HttpResponse, JsonResponse
    # from django.views.decorators.csrf import csrf_exempt
    # from rest_framework.parsers import JSONParser
    # @csrf_exempt
    # def org_role_list(request):
    #     """
    #     List all Teams, or create a new OrgRole.
    #     """
    #     if request.method == 'GET':
    #         orgRole = OrgRole.objects.all()
    #         serializer = OrgRoleSerializer(orgRole, many=True)
    #         return JsonResponse(serializer.data, safe=False)

    #     elif request.method == 'POST':
    #         data = JSONParser().parse(request)
    #         serializer = OrgRoleSerializer(data=data)
    #         if serializer.is_valid():
    #             serializer.save()
    #             return JsonResponse(serializer.data, status=201)
    #         return JsonResponse(serializer.errors, status=400)

    # @csrf_exempt
    # def org_role_detail(request, pk):
    #     """
    #     Retrieve, update or delete a code OrgRole.
    #     """
    #     try:
    #         orgRole = OrgRole.objects.get(pk=pk)
    #     except OrgRole.DoesNotExist:
    #         return HttpResponse(status=404)

    #     if request.method == 'GET':
    #         serializer = OrgRoleSerializer(orgRole)
    #         return JsonResponse(serializer.data)

    #     elif request.method == 'PUT':
    #         data = JSONParser().parse(request)
    #         serializer = OrgRoleSerializer(orgRole, data=data)
    #         if serializer.is_valid():
    #             serializer.save()
    #             return JsonResponse(serializer.data)
    #         return JsonResponse(orgRole.errors, status=400)

    #     elif request.method == 'DELETE':
    #         orgRole.delete()
    #         return HttpResponse(status=204)