from TeamWork.models import Response
from TeamWork.serializers.responseSerializer import ResponseSerializer
# class-based views
from django.http import Http404, HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status



class ResponseList(APIView):
    def get(self, request, format = None):
        """
        List all Response, or create a new Response.
        """
        response = Response.objects.all()
        serializer = ResponseSerializer(response, many=True)
        return Response(serializer.data)

    def post(self, request, format = None):
        serializer = ResponseSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_404_CREATED)

class ResponseDetail(APIView):
    def get_object(self, pk):
        try:
            return Response.objects.get(pk = pk)
        except Response.DoesNotExist:
            raise Http404

    def get(self, request, pk, format = None):
        response = self.get_object(pk)
        serializer = ResponseSerializer(response)
        return Response(serializer.data)

    def put(self, request, pk):
        response = self.get_object(pk)
        serializer = ResponseSerializer(response, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(response.errors, status = status.HTTP_400_CREATED)

    def delete(self, request, pk):
        response = self.get_object(pk)
        response.delete()
        return HttpResponse(status = status.HTTP_204_CREATED)







