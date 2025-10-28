// https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/getambassador_io_rate_limit_service_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SGetambassadorIoRateLimitServiceV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/getambassador_io_rate_limit_service_v1_manifest#metadata DataK8SGetambassadorIoRateLimitServiceV1Manifest#metadata}
  */
  readonly metadata: DataK8SGetambassadorIoRateLimitServiceV1ManifestMetadata;
  /**
  * RateLimitServiceSpec defines the desired state of RateLimitService
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/getambassador_io_rate_limit_service_v1_manifest#spec DataK8SGetambassadorIoRateLimitServiceV1Manifest#spec}
  */
  readonly spec?: DataK8SGetambassadorIoRateLimitServiceV1ManifestSpec;
}
export interface DataK8SGetambassadorIoRateLimitServiceV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/getambassador_io_rate_limit_service_v1_manifest#annotations DataK8SGetambassadorIoRateLimitServiceV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/getambassador_io_rate_limit_service_v1_manifest#labels DataK8SGetambassadorIoRateLimitServiceV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/getambassador_io_rate_limit_service_v1_manifest#name DataK8SGetambassadorIoRateLimitServiceV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/getambassador_io_rate_limit_service_v1_manifest#namespace DataK8SGetambassadorIoRateLimitServiceV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SGetambassadorIoRateLimitServiceV1ManifestMetadataToTerraform(struct?: DataK8SGetambassadorIoRateLimitServiceV1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SGetambassadorIoRateLimitServiceV1ManifestMetadataToHclTerraform(struct?: DataK8SGetambassadorIoRateLimitServiceV1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoRateLimitServiceV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoRateLimitServiceV1ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoRateLimitServiceV1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SGetambassadorIoRateLimitServiceV1ManifestSpecV3Grpc {
  /**
  * UseResourceExhaustedCode, when set to true, will cause envoy to return a 'RESOURCE_EXHAUSTED' gRPC code instead of the default 'UNAVAILABLE' gRPC code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/getambassador_io_rate_limit_service_v1_manifest#use_resource_exhausted_code DataK8SGetambassadorIoRateLimitServiceV1Manifest#use_resource_exhausted_code}
  */
  readonly useResourceExhaustedCode?: boolean | cdktf.IResolvable;
}

export function dataK8SGetambassadorIoRateLimitServiceV1ManifestSpecV3GrpcToTerraform(struct?: DataK8SGetambassadorIoRateLimitServiceV1ManifestSpecV3Grpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_resource_exhausted_code: cdktf.booleanToTerraform(struct!.useResourceExhaustedCode),
  }
}


export function dataK8SGetambassadorIoRateLimitServiceV1ManifestSpecV3GrpcToHclTerraform(struct?: DataK8SGetambassadorIoRateLimitServiceV1ManifestSpecV3Grpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_resource_exhausted_code: {
      value: cdktf.booleanToHclTerraform(struct!.useResourceExhaustedCode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoRateLimitServiceV1ManifestSpecV3GrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoRateLimitServiceV1ManifestSpecV3Grpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useResourceExhaustedCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.useResourceExhaustedCode = this._useResourceExhaustedCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoRateLimitServiceV1ManifestSpecV3Grpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._useResourceExhaustedCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._useResourceExhaustedCode = value.useResourceExhaustedCode;
    }
  }

  // use_resource_exhausted_code - computed: false, optional: true, required: false
  private _useResourceExhaustedCode?: boolean | cdktf.IResolvable; 
  public get useResourceExhaustedCode() {
    return this.getBooleanAttribute('use_resource_exhausted_code');
  }
  public set useResourceExhaustedCode(value: boolean | cdktf.IResolvable) {
    this._useResourceExhaustedCode = value;
  }
  public resetUseResourceExhaustedCode() {
    this._useResourceExhaustedCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useResourceExhaustedCodeInput() {
    return this._useResourceExhaustedCode;
  }
}
export interface DataK8SGetambassadorIoRateLimitServiceV1ManifestSpec {
  /**
  * Common to all Ambassador objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/getambassador_io_rate_limit_service_v1_manifest#ambassador_id DataK8SGetambassadorIoRateLimitServiceV1Manifest#ambassador_id}
  */
  readonly ambassadorId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/getambassador_io_rate_limit_service_v1_manifest#domain DataK8SGetambassadorIoRateLimitServiceV1Manifest#domain}
  */
  readonly domain?: string;
  /**
  * FailureModeDeny when set to true, envoy will deny traffic if it is unable to communicate with the rate limit service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/getambassador_io_rate_limit_service_v1_manifest#failure_mode_deny DataK8SGetambassadorIoRateLimitServiceV1Manifest#failure_mode_deny}
  */
  readonly failureModeDeny?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/getambassador_io_rate_limit_service_v1_manifest#protocol_version DataK8SGetambassadorIoRateLimitServiceV1Manifest#protocol_version}
  */
  readonly protocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/getambassador_io_rate_limit_service_v1_manifest#service DataK8SGetambassadorIoRateLimitServiceV1Manifest#service}
  */
  readonly service: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/getambassador_io_rate_limit_service_v1_manifest#timeout_ms DataK8SGetambassadorIoRateLimitServiceV1Manifest#timeout_ms}
  */
  readonly timeoutMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/getambassador_io_rate_limit_service_v1_manifest#tls DataK8SGetambassadorIoRateLimitServiceV1Manifest#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/getambassador_io_rate_limit_service_v1_manifest#v3_grpc DataK8SGetambassadorIoRateLimitServiceV1Manifest#v3_grpc}
  */
  readonly v3Grpc?: DataK8SGetambassadorIoRateLimitServiceV1ManifestSpecV3Grpc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/getambassador_io_rate_limit_service_v1_manifest#v3_stats_name DataK8SGetambassadorIoRateLimitServiceV1Manifest#v3_stats_name}
  */
  readonly v3StatsName?: string;
}

export function dataK8SGetambassadorIoRateLimitServiceV1ManifestSpecToTerraform(struct?: DataK8SGetambassadorIoRateLimitServiceV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ambassador_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ambassadorId),
    domain: cdktf.stringToTerraform(struct!.domain),
    failure_mode_deny: cdktf.booleanToTerraform(struct!.failureModeDeny),
    protocol_version: cdktf.stringToTerraform(struct!.protocolVersion),
    service: cdktf.stringToTerraform(struct!.service),
    timeout_ms: cdktf.numberToTerraform(struct!.timeoutMs),
    tls: cdktf.booleanToTerraform(struct!.tls),
    v3_grpc: dataK8SGetambassadorIoRateLimitServiceV1ManifestSpecV3GrpcToTerraform(struct!.v3Grpc),
    v3_stats_name: cdktf.stringToTerraform(struct!.v3StatsName),
  }
}


export function dataK8SGetambassadorIoRateLimitServiceV1ManifestSpecToHclTerraform(struct?: DataK8SGetambassadorIoRateLimitServiceV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ambassador_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ambassadorId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failure_mode_deny: {
      value: cdktf.booleanToHclTerraform(struct!.failureModeDeny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.protocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.timeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls: {
      value: cdktf.booleanToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    v3_grpc: {
      value: dataK8SGetambassadorIoRateLimitServiceV1ManifestSpecV3GrpcToHclTerraform(struct!.v3Grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoRateLimitServiceV1ManifestSpecV3Grpc",
    },
    v3_stats_name: {
      value: cdktf.stringToHclTerraform(struct!.v3StatsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoRateLimitServiceV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoRateLimitServiceV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ambassadorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ambassadorId = this._ambassadorId;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._failureModeDeny !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureModeDeny = this._failureModeDeny;
    }
    if (this._protocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVersion = this._protocolVersion;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._timeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMs = this._timeoutMs;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._v3Grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3Grpc = this._v3Grpc?.internalValue;
    }
    if (this._v3StatsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3StatsName = this._v3StatsName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoRateLimitServiceV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ambassadorId = undefined;
      this._domain = undefined;
      this._failureModeDeny = undefined;
      this._protocolVersion = undefined;
      this._service = undefined;
      this._timeoutMs = undefined;
      this._tls = undefined;
      this._v3Grpc.internalValue = undefined;
      this._v3StatsName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ambassadorId = value.ambassadorId;
      this._domain = value.domain;
      this._failureModeDeny = value.failureModeDeny;
      this._protocolVersion = value.protocolVersion;
      this._service = value.service;
      this._timeoutMs = value.timeoutMs;
      this._tls = value.tls;
      this._v3Grpc.internalValue = value.v3Grpc;
      this._v3StatsName = value.v3StatsName;
    }
  }

  // ambassador_id - computed: false, optional: true, required: false
  private _ambassadorId?: string[]; 
  public get ambassadorId() {
    return this.getListAttribute('ambassador_id');
  }
  public set ambassadorId(value: string[]) {
    this._ambassadorId = value;
  }
  public resetAmbassadorId() {
    this._ambassadorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ambassadorIdInput() {
    return this._ambassadorId;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // failure_mode_deny - computed: false, optional: true, required: false
  private _failureModeDeny?: boolean | cdktf.IResolvable; 
  public get failureModeDeny() {
    return this.getBooleanAttribute('failure_mode_deny');
  }
  public set failureModeDeny(value: boolean | cdktf.IResolvable) {
    this._failureModeDeny = value;
  }
  public resetFailureModeDeny() {
    this._failureModeDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureModeDenyInput() {
    return this._failureModeDeny;
  }

  // protocol_version - computed: false, optional: true, required: false
  private _protocolVersion?: string; 
  public get protocolVersion() {
    return this.getStringAttribute('protocol_version');
  }
  public set protocolVersion(value: string) {
    this._protocolVersion = value;
  }
  public resetProtocolVersion() {
    this._protocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolVersionInput() {
    return this._protocolVersion;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // timeout_ms - computed: false, optional: true, required: false
  private _timeoutMs?: number; 
  public get timeoutMs() {
    return this.getNumberAttribute('timeout_ms');
  }
  public set timeoutMs(value: number) {
    this._timeoutMs = value;
  }
  public resetTimeoutMs() {
    this._timeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMsInput() {
    return this._timeoutMs;
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
  public set tls(value: boolean | cdktf.IResolvable) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // v3_grpc - computed: false, optional: true, required: false
  private _v3Grpc = new DataK8SGetambassadorIoRateLimitServiceV1ManifestSpecV3GrpcOutputReference(this, "v3_grpc");
  public get v3Grpc() {
    return this._v3Grpc;
  }
  public putV3Grpc(value: DataK8SGetambassadorIoRateLimitServiceV1ManifestSpecV3Grpc) {
    this._v3Grpc.internalValue = value;
  }
  public resetV3Grpc() {
    this._v3Grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3GrpcInput() {
    return this._v3Grpc.internalValue;
  }

  // v3_stats_name - computed: false, optional: true, required: false
  private _v3StatsName?: string; 
  public get v3StatsName() {
    return this.getStringAttribute('v3_stats_name');
  }
  public set v3StatsName(value: string) {
    this._v3StatsName = value;
  }
  public resetV3StatsName() {
    this._v3StatsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3StatsNameInput() {
    return this._v3StatsName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/getambassador_io_rate_limit_service_v1_manifest k8s_getambassador_io_rate_limit_service_v1_manifest}
*/
export class DataK8SGetambassadorIoRateLimitServiceV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_getambassador_io_rate_limit_service_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SGetambassadorIoRateLimitServiceV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SGetambassadorIoRateLimitServiceV1Manifest to import
  * @param importFromId The id of the existing DataK8SGetambassadorIoRateLimitServiceV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/getambassador_io_rate_limit_service_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SGetambassadorIoRateLimitServiceV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_getambassador_io_rate_limit_service_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/getambassador_io_rate_limit_service_v1_manifest k8s_getambassador_io_rate_limit_service_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SGetambassadorIoRateLimitServiceV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SGetambassadorIoRateLimitServiceV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_getambassador_io_rate_limit_service_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.10.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SGetambassadorIoRateLimitServiceV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGetambassadorIoRateLimitServiceV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SGetambassadorIoRateLimitServiceV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGetambassadorIoRateLimitServiceV1ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8SGetambassadorIoRateLimitServiceV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SGetambassadorIoRateLimitServiceV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SGetambassadorIoRateLimitServiceV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGetambassadorIoRateLimitServiceV1ManifestMetadata",
      },
      spec: {
        value: dataK8SGetambassadorIoRateLimitServiceV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGetambassadorIoRateLimitServiceV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
