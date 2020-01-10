from TeamWork.models import Hierarchy
from TeamWork.serializers.hierarchySerializer import HierarchySerializer
# ****** #


# mixins based --> model-backed API views
from rest_framework import mixins
from rest_framework import generics

class HierarchyList(mixins.ListModelMixin,
                  mixins.CreateModelMixin,
                  generics.GenericAPIView):
    queryset = Hierarchy.objects.all()
    serializer_class = HierarchySerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class HierarchyDetail(mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin,
                    generics.GenericAPIView):
    queryset = Hierarchy.objects.all()
    serializer_class = HierarchySerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)









from TeamWork.models import Hierarchy
from TeamWork.serializers.hierarchySerializer import HierarchySerializer
# class-based views
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status



class HierarchyList(APIView):
    def get(self, request, format = None):
        """
        List all Teams, or create a new Hierarchy.
        """
        hierarchy = Hierarchy.objects.all()
        serializer = HierarchySerializer(hierarchy, many=True)
        return Response(serializer.data)

    def post(self, request, format = None):
        serializer = HierarchySerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_404_CREATED)

class HierarchyDetail(APIView):
    def get_object(self, pk):
        try:
            return Hierarchy.objects.get(pk = pk)
        except Hierarchy.DoesNotExist:
            raise Http404

    def get(self, request, pk, format = None):
        hierarchy = self.get_object(pk)
        serializer = HierarchySerializer(hierarchy)
        return Response(serializer.data)

    def put(self, request, pk):
        hierarchy = self.get_object(pk)
        serializer = HierarchySerializer(hierarchy, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
            return Response(hierarchy.errors, status = status.HTTP_400_CREATED)

    def delete(self, request, pk):
        hierarchy = self.get_object(pk)
        hierarchy.delete()
        return HttpResponse(status = status.HTTP_204_CREATED)
