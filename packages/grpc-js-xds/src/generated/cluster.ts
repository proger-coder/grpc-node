import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';


type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  envoy: {
    annotations: {
    }
    config: {
      cluster: {
        v3: {
          CircuitBreakers: MessageTypeDefinition
          Cluster: MessageTypeDefinition
          ClusterCollection: MessageTypeDefinition
          Filter: MessageTypeDefinition
          LoadBalancingPolicy: MessageTypeDefinition
          OutlierDetection: MessageTypeDefinition
          TrackClusterStats: MessageTypeDefinition
          UpstreamBindConfig: MessageTypeDefinition
          UpstreamConnectionOptions: MessageTypeDefinition
        }
      }
      core: {
        v3: {
          Address: MessageTypeDefinition
          AggregatedConfigSource: MessageTypeDefinition
          AlternateProtocolsCacheOptions: MessageTypeDefinition
          ApiConfigSource: MessageTypeDefinition
          ApiVersion: EnumTypeDefinition
          AsyncDataSource: MessageTypeDefinition
          BackoffStrategy: MessageTypeDefinition
          BindConfig: MessageTypeDefinition
          BuildVersion: MessageTypeDefinition
          CidrRange: MessageTypeDefinition
          ConfigSource: MessageTypeDefinition
          ControlPlane: MessageTypeDefinition
          DataSource: MessageTypeDefinition
          DnsResolutionConfig: MessageTypeDefinition
          DnsResolverOptions: MessageTypeDefinition
          EnvoyInternalAddress: MessageTypeDefinition
          EventServiceConfig: MessageTypeDefinition
          Extension: MessageTypeDefinition
          ExtensionConfigSource: MessageTypeDefinition
          GrpcProtocolOptions: MessageTypeDefinition
          GrpcService: MessageTypeDefinition
          HeaderMap: MessageTypeDefinition
          HeaderValue: MessageTypeDefinition
          HeaderValueOption: MessageTypeDefinition
          HealthCheck: MessageTypeDefinition
          HealthStatus: EnumTypeDefinition
          Http1ProtocolOptions: MessageTypeDefinition
          Http2ProtocolOptions: MessageTypeDefinition
          Http3ProtocolOptions: MessageTypeDefinition
          HttpProtocolOptions: MessageTypeDefinition
          HttpUri: MessageTypeDefinition
          KeepaliveSettings: MessageTypeDefinition
          Locality: MessageTypeDefinition
          Metadata: MessageTypeDefinition
          Node: MessageTypeDefinition
          Pipe: MessageTypeDefinition
          QueryParameter: MessageTypeDefinition
          QuicProtocolOptions: MessageTypeDefinition
          RateLimitSettings: MessageTypeDefinition
          RemoteDataSource: MessageTypeDefinition
          RequestMethod: EnumTypeDefinition
          RetryPolicy: MessageTypeDefinition
          RoutingPriority: EnumTypeDefinition
          RuntimeDouble: MessageTypeDefinition
          RuntimeFeatureFlag: MessageTypeDefinition
          RuntimeFractionalPercent: MessageTypeDefinition
          RuntimePercent: MessageTypeDefinition
          RuntimeUInt32: MessageTypeDefinition
          SchemeHeaderTransformation: MessageTypeDefinition
          SelfConfigSource: MessageTypeDefinition
          SocketAddress: MessageTypeDefinition
          SocketOption: MessageTypeDefinition
          TcpKeepalive: MessageTypeDefinition
          TcpProtocolOptions: MessageTypeDefinition
          TrafficDirection: EnumTypeDefinition
          TransportSocket: MessageTypeDefinition
          TypedExtensionConfig: MessageTypeDefinition
          UpstreamHttpProtocolOptions: MessageTypeDefinition
          WatchedDirectory: MessageTypeDefinition
        }
      }
      endpoint: {
        v3: {
          ClusterLoadAssignment: MessageTypeDefinition
          Endpoint: MessageTypeDefinition
          LbEndpoint: MessageTypeDefinition
          LedsClusterLocalityConfig: MessageTypeDefinition
          LocalityLbEndpoints: MessageTypeDefinition
        }
      }
    }
    extensions: {
      clusters: {
        aggregate: {
          v3: {
            ClusterConfig: MessageTypeDefinition
          }
        }
      }
    }
    type: {
      matcher: {
        v3: {
          ListStringMatcher: MessageTypeDefinition
          RegexMatchAndSubstitute: MessageTypeDefinition
          RegexMatcher: MessageTypeDefinition
          StringMatcher: MessageTypeDefinition
        }
      }
      v3: {
        CodecClientType: EnumTypeDefinition
        DoubleRange: MessageTypeDefinition
        FractionalPercent: MessageTypeDefinition
        Int32Range: MessageTypeDefinition
        Int64Range: MessageTypeDefinition
        Percent: MessageTypeDefinition
        SemanticVersion: MessageTypeDefinition
      }
    }
  }
  google: {
    protobuf: {
      Any: MessageTypeDefinition
      BoolValue: MessageTypeDefinition
      BytesValue: MessageTypeDefinition
      DescriptorProto: MessageTypeDefinition
      DoubleValue: MessageTypeDefinition
      Duration: MessageTypeDefinition
      Empty: MessageTypeDefinition
      EnumDescriptorProto: MessageTypeDefinition
      EnumOptions: MessageTypeDefinition
      EnumValueDescriptorProto: MessageTypeDefinition
      EnumValueOptions: MessageTypeDefinition
      FieldDescriptorProto: MessageTypeDefinition
      FieldOptions: MessageTypeDefinition
      FileDescriptorProto: MessageTypeDefinition
      FileDescriptorSet: MessageTypeDefinition
      FileOptions: MessageTypeDefinition
      FloatValue: MessageTypeDefinition
      GeneratedCodeInfo: MessageTypeDefinition
      Int32Value: MessageTypeDefinition
      Int64Value: MessageTypeDefinition
      ListValue: MessageTypeDefinition
      MessageOptions: MessageTypeDefinition
      MethodDescriptorProto: MessageTypeDefinition
      MethodOptions: MessageTypeDefinition
      NullValue: EnumTypeDefinition
      OneofDescriptorProto: MessageTypeDefinition
      OneofOptions: MessageTypeDefinition
      ServiceDescriptorProto: MessageTypeDefinition
      ServiceOptions: MessageTypeDefinition
      SourceCodeInfo: MessageTypeDefinition
      StringValue: MessageTypeDefinition
      Struct: MessageTypeDefinition
      Timestamp: MessageTypeDefinition
      UInt32Value: MessageTypeDefinition
      UInt64Value: MessageTypeDefinition
      UninterpretedOption: MessageTypeDefinition
      Value: MessageTypeDefinition
    }
  }
  udpa: {
    annotations: {
      FieldMigrateAnnotation: MessageTypeDefinition
      FieldSecurityAnnotation: MessageTypeDefinition
      FileMigrateAnnotation: MessageTypeDefinition
      MigrateAnnotation: MessageTypeDefinition
      PackageVersionStatus: EnumTypeDefinition
      StatusAnnotation: MessageTypeDefinition
      VersioningAnnotation: MessageTypeDefinition
    }
  }
  validate: {
    AnyRules: MessageTypeDefinition
    BoolRules: MessageTypeDefinition
    BytesRules: MessageTypeDefinition
    DoubleRules: MessageTypeDefinition
    DurationRules: MessageTypeDefinition
    EnumRules: MessageTypeDefinition
    FieldRules: MessageTypeDefinition
    Fixed32Rules: MessageTypeDefinition
    Fixed64Rules: MessageTypeDefinition
    FloatRules: MessageTypeDefinition
    Int32Rules: MessageTypeDefinition
    Int64Rules: MessageTypeDefinition
    KnownRegex: EnumTypeDefinition
    MapRules: MessageTypeDefinition
    MessageRules: MessageTypeDefinition
    RepeatedRules: MessageTypeDefinition
    SFixed32Rules: MessageTypeDefinition
    SFixed64Rules: MessageTypeDefinition
    SInt32Rules: MessageTypeDefinition
    SInt64Rules: MessageTypeDefinition
    StringRules: MessageTypeDefinition
    TimestampRules: MessageTypeDefinition
    UInt32Rules: MessageTypeDefinition
    UInt64Rules: MessageTypeDefinition
  }
  xds: {
    annotations: {
      v3: {
        FieldStatusAnnotation: MessageTypeDefinition
        FileStatusAnnotation: MessageTypeDefinition
        MessageStatusAnnotation: MessageTypeDefinition
        PackageVersionStatus: EnumTypeDefinition
        StatusAnnotation: MessageTypeDefinition
      }
    }
    core: {
      v3: {
        Authority: MessageTypeDefinition
        CollectionEntry: MessageTypeDefinition
        ContextParams: MessageTypeDefinition
        ResourceLocator: MessageTypeDefinition
      }
    }
  }
}

