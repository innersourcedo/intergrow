from TeamWork.models import Help,Response as Responses
from TeamWork.serializers.helpSerializer import HelpSerializer
# class-based views
from django.http import Http404, HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from TeamWork.serializers.responseSerializer import customResponseSerializer

class RespnseFilter(APIView):
    def get(self, request, pk, format = None):
        responses = Responses.objects.filter(help_request = pk)
        serializer = customResponseSerializer(responses, many=True)
        return Response(serializer.data)


class HelpList(APIView):
    def get(self, request, format = None):
        """
        List all Help, or create a new Help.
        """
        help = Help.objects.all()
        serializer = HelpSerializer(help, many=True)
        return Response(serializer.data)

    def post(self, request, format = None):
        serializer = HelpSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_404_CREATED)

class HelpDetail(APIView):
    def get_object(self, pk):
        try:
            return Help.objects.get(pk = pk)
        except Help.DoesNotExist:
            raise Http404

    def get(self, request, pk, format = None):
        help = self.get_object(pk)
        serializer = HelpSerializer(help)
        return Response(serializer.data)

    def put(self, request, pk):
        help = self.get_object(pk)
        serializer = HelpSerializer(help, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(help.errors, status = status.HTTP_400_CREATED)

    def delete(self, request, pk):
        help = self.get_object(pk)
        help.delete()
        return HttpResponse(status = status.HTTP_204_CREATED)







