(()=>{"use strict";var e=document.querySelectorAll(".animation"),t=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(e.target.classList.add("anim"),t.unobserve(e.target))}))}),{rootMargin:"0px",threshold:.5});e.forEach((function(e){t.observe(e)}));var n=document.querySelector(".menuBtn"),c=document.querySelector("nav");null!==n&&null!==c&&(n.addEventListener("click",(function(){n.classList.toggle("active"),c.classList.toggle("popUp")})),document.addEventListener("click",(function(e){(null==c?void 0:c.contains(e.target))||n.contains(e.target)||(null==c||c.classList.remove("popUp"),null==n||n.classList.remove("active"))})))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC45OTRmZGJiN2VjOTIyMjQ2Y2QyYy5qcyIsIm1hcHBpbmdzIjoibUJBQ0EsSUFBTUEsRUFBa0NDLFNBQVNDLGlCQUFpQixjQVk1REMsRUFBVyxJQUFJQyxzQkFWSSxTQUFDQyxFQUFzQ0YsR0FDNURFLEVBQVFDLFNBQVEsU0FBQUMsR0FDUkEsRUFBTUMsaUJBQ05ELEVBQU1FLE9BQU9DLFVBQVVDLElBQUksUUFDM0JSLEVBQVNTLFVBQVVMLEVBQU1FLFFBRWpDLEdBQ0osR0FHNEQsQ0FDeERJLFdBQVksTUFDWkMsVUFBVyxLQUlmZCxFQUFXTSxTQUFRLFNBQUNTLEdBQ2hCWixFQUFTYSxRQUFRRCxFQUNyQixJQUdBLElBQU1FLEVBQThCaEIsU0FBU2lCLGNBQWMsWUFDckRDLEVBQTJCbEIsU0FBU2lCLGNBQWMsT0FFekMsT0FBWEQsR0FBMkIsT0FBUkUsSUFDbkJGLEVBQVFHLGlCQUFpQixTQUFTLFdBQzlCSCxFQUFRUCxVQUFVVyxPQUFPLFVBQ3pCRixFQUFLVCxVQUFVVyxPQUFPLFFBQzFCLElBRUFwQixTQUFTbUIsaUJBQWlCLFNBQVMsU0FBU0UsSUFDbkNILGFBQUksRUFBSkEsRUFBTUksU0FBU0QsRUFBTWIsVUFBbUJRLEVBQVFNLFNBQVNELEVBQU1iLFVBQ2hFVSxTQUFBQSxFQUFNVCxVQUFVYyxPQUFPLFNBQ3ZCUCxTQUFBQSxFQUFTUCxVQUFVYyxPQUFPLFVBRWxDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLy4vc3JjL3Byb2plY3QvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5jb25zdCBhZHZhbnRhZ2VzOiBOb2RlTGlzdE9mPEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFuaW1hdGlvbicpO1xyXG5cclxuY29uc3Qgb2JzZXJ2ZXJDYWxsYmFjayA9IChlbnRyaWVzOiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5W10sIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlcik6IHZvaWQgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FuaW0nKTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcclxuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIob2JzZXJ2ZXJDYWxsYmFjaywge1xyXG4gICAgcm9vdE1hcmdpbjogJzBweCcsXHJcbiAgICB0aHJlc2hvbGQ6IDAuNVxyXG59KTtcclxuXHJcbi8vIE9ic2VydmUgZWFjaCBhZHZhbnRhZ2UgZWxlbWVudFxyXG5hZHZhbnRhZ2VzLmZvckVhY2goKGFkdmFudGFnKSA9PiB7XHJcbiAgICBvYnNlcnZlci5vYnNlcnZlKGFkdmFudGFnKTtcclxufSk7XHJcblxyXG5cclxuY29uc3QgbWVudUJ0bjogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVCdG4nKTtcclxuY29uc3QgbWVudTogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jyk7XHJcblxyXG5pZiAobWVudUJ0biE9PSBudWxsICYmIG1lbnUhPT0gbnVsbCkge1xyXG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgncG9wVXAnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICBpZiAoIW1lbnU/LmNvbnRhaW5zKGV2ZW50LnRhcmdldCBhcyBOb2RlKSAmJiFtZW51QnRuLmNvbnRhaW5zKGV2ZW50LnRhcmdldCBhcyBOb2RlKSkge1xyXG4gICAgICAgICAgICBtZW51Py5jbGFzc0xpc3QucmVtb3ZlKCdwb3BVcCcpO1xyXG4gICAgICAgICAgICBtZW51QnRuPy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSJdLCJuYW1lcyI6WyJhZHZhbnRhZ2VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInRhcmdldCIsImNsYXNzTGlzdCIsImFkZCIsInVub2JzZXJ2ZSIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJhZHZhbnRhZyIsIm9ic2VydmUiLCJtZW51QnRuIiwicXVlcnlTZWxlY3RvciIsIm1lbnUiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlIiwiZXZlbnQiLCJjb250YWlucyIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=