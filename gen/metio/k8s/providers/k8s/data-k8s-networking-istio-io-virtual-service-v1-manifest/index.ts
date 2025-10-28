// https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#metadata DataK8SNetworkingIstioIoVirtualServiceV1Manifest#metadata}
  */
  readonly metadata: DataK8SNetworkingIstioIoVirtualServiceV1ManifestMetadata;
  /**
  * Configuration affecting label/content routing, sni routing, etc. See more details at: https://istio.io/docs/reference/config/networking/virtual-service.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#spec DataK8SNetworkingIstioIoVirtualServiceV1Manifest#spec}
  */
  readonly spec?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpec;
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#annotations DataK8SNetworkingIstioIoVirtualServiceV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#labels DataK8SNetworkingIstioIoVirtualServiceV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#name DataK8SNetworkingIstioIoVirtualServiceV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#namespace DataK8SNetworkingIstioIoVirtualServiceV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestMetadataToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestMetadataToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicyAllowOrigins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#exact DataK8SNetworkingIstioIoVirtualServiceV1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#prefix DataK8SNetworkingIstioIoVirtualServiceV1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#regex DataK8SNetworkingIstioIoVirtualServiceV1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicyAllowOriginsToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicyAllowOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicyAllowOriginsToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicyAllowOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicyAllowOriginsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicyAllowOrigins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicyAllowOrigins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicyAllowOriginsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicyAllowOrigins[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicyAllowOriginsOutputReference {
    return new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicyAllowOriginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicy {
  /**
  * Indicates whether the caller is allowed to send the actual request (not the preflight) using credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#allow_credentials DataK8SNetworkingIstioIoVirtualServiceV1Manifest#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * List of HTTP headers that can be used when requesting the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#allow_headers DataK8SNetworkingIstioIoVirtualServiceV1Manifest#allow_headers}
  */
  readonly allowHeaders?: string[];
  /**
  * List of HTTP methods allowed to access the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#allow_methods DataK8SNetworkingIstioIoVirtualServiceV1Manifest#allow_methods}
  */
  readonly allowMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#allow_origin DataK8SNetworkingIstioIoVirtualServiceV1Manifest#allow_origin}
  */
  readonly allowOrigin?: string[];
  /**
  * String patterns that match allowed origins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#allow_origins DataK8SNetworkingIstioIoVirtualServiceV1Manifest#allow_origins}
  */
  readonly allowOrigins?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicyAllowOrigins[] | cdktf.IResolvable;
  /**
  * A list of HTTP headers that the browsers are allowed to access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#expose_headers DataK8SNetworkingIstioIoVirtualServiceV1Manifest#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * Specifies how long the results of a preflight request can be cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#max_age DataK8SNetworkingIstioIoVirtualServiceV1Manifest#max_age}
  */
  readonly maxAge?: string;
  /**
  * Indicates whether preflight requests not matching the configured allowed origin shouldn't be forwarded to the upstream. Valid Options: FORWARD, IGNORE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#unmatched_preflights DataK8SNetworkingIstioIoVirtualServiceV1Manifest#unmatched_preflights}
  */
  readonly unmatchedPreflights?: string;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicyToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allow_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowHeaders),
    allow_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowMethods),
    allow_origin: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowOrigin),
    allow_origins: cdktf.listMapper(dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicyAllowOriginsToTerraform, false)(struct!.allowOrigins),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exposeHeaders),
    max_age: cdktf.stringToTerraform(struct!.maxAge),
    unmatched_preflights: cdktf.stringToTerraform(struct!.unmatchedPreflights),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicyToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.allowCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_origin: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowOrigin),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_origins: {
      value: cdktf.listMapperHcl(dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicyAllowOriginsToHclTerraform, false)(struct!.allowOrigins),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicyAllowOriginsList",
    },
    expose_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exposeHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_age: {
      value: cdktf.stringToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unmatched_preflights: {
      value: cdktf.stringToHclTerraform(struct!.unmatchedPreflights),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCredentials = this._allowCredentials;
    }
    if (this._allowHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHeaders = this._allowHeaders;
    }
    if (this._allowMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMethods = this._allowMethods;
    }
    if (this._allowOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOrigin = this._allowOrigin;
    }
    if (this._allowOrigins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOrigins = this._allowOrigins?.internalValue;
    }
    if (this._exposeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeHeaders = this._exposeHeaders;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._unmatchedPreflights !== undefined) {
      hasAnyValues = true;
      internalValueResult.unmatchedPreflights = this._unmatchedPreflights;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowCredentials = undefined;
      this._allowHeaders = undefined;
      this._allowMethods = undefined;
      this._allowOrigin = undefined;
      this._allowOrigins.internalValue = undefined;
      this._exposeHeaders = undefined;
      this._maxAge = undefined;
      this._unmatchedPreflights = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowCredentials = value.allowCredentials;
      this._allowHeaders = value.allowHeaders;
      this._allowMethods = value.allowMethods;
      this._allowOrigin = value.allowOrigin;
      this._allowOrigins.internalValue = value.allowOrigins;
      this._exposeHeaders = value.exposeHeaders;
      this._maxAge = value.maxAge;
      this._unmatchedPreflights = value.unmatchedPreflights;
    }
  }

  // allow_credentials - computed: false, optional: true, required: false
  private _allowCredentials?: boolean | cdktf.IResolvable; 
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials');
  }
  public set allowCredentials(value: boolean | cdktf.IResolvable) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials;
  }

  // allow_headers - computed: false, optional: true, required: false
  private _allowHeaders?: string[]; 
  public get allowHeaders() {
    return this.getListAttribute('allow_headers');
  }
  public set allowHeaders(value: string[]) {
    this._allowHeaders = value;
  }
  public resetAllowHeaders() {
    this._allowHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHeadersInput() {
    return this._allowHeaders;
  }

  // allow_methods - computed: false, optional: true, required: false
  private _allowMethods?: string[]; 
  public get allowMethods() {
    return this.getListAttribute('allow_methods');
  }
  public set allowMethods(value: string[]) {
    this._allowMethods = value;
  }
  public resetAllowMethods() {
    this._allowMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMethodsInput() {
    return this._allowMethods;
  }

  // allow_origin - computed: false, optional: true, required: false
  private _allowOrigin?: string[]; 
  public get allowOrigin() {
    return this.getListAttribute('allow_origin');
  }
  public set allowOrigin(value: string[]) {
    this._allowOrigin = value;
  }
  public resetAllowOrigin() {
    this._allowOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginInput() {
    return this._allowOrigin;
  }

  // allow_origins - computed: false, optional: true, required: false
  private _allowOrigins = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicyAllowOriginsList(this, "allow_origins", false);
  public get allowOrigins() {
    return this._allowOrigins;
  }
  public putAllowOrigins(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicyAllowOrigins[] | cdktf.IResolvable) {
    this._allowOrigins.internalValue = value;
  }
  public resetAllowOrigins() {
    this._allowOrigins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginsInput() {
    return this._allowOrigins.internalValue;
  }

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string[]; 
  public get exposeHeaders() {
    return this.getListAttribute('expose_headers');
  }
  public set exposeHeaders(value: string[]) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: string; 
  public get maxAge() {
    return this.getStringAttribute('max_age');
  }
  public set maxAge(value: string) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // unmatched_preflights - computed: false, optional: true, required: false
  private _unmatchedPreflights?: string; 
  public get unmatchedPreflights() {
    return this.getStringAttribute('unmatched_preflights');
  }
  public set unmatchedPreflights(value: string) {
    this._unmatchedPreflights = value;
  }
  public resetUnmatchedPreflights() {
    this._unmatchedPreflights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmatchedPreflightsInput() {
    return this._unmatchedPreflights;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDelegate {
  /**
  * Name specifies the name of the delegate VirtualService.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#name DataK8SNetworkingIstioIoVirtualServiceV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the namespace where the delegate VirtualService resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#namespace DataK8SNetworkingIstioIoVirtualServiceV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDelegateToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDelegate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDelegateToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDelegate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDelegateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDelegate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDelegate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDirectResponseBody {
  /**
  * response body as base64 encoded bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#bytes DataK8SNetworkingIstioIoVirtualServiceV1Manifest#bytes}
  */
  readonly bytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#string DataK8SNetworkingIstioIoVirtualServiceV1Manifest#string}
  */
  readonly string?: string;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDirectResponseBodyToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDirectResponseBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bytes: cdktf.stringToTerraform(struct!.bytes),
    string: cdktf.stringToTerraform(struct!.string),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDirectResponseBodyToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDirectResponseBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bytes: {
      value: cdktf.stringToHclTerraform(struct!.bytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDirectResponseBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDirectResponseBody | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytes = this._bytes;
    }
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDirectResponseBody | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bytes = undefined;
      this._string = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bytes = value.bytes;
      this._string = value.string;
    }
  }

  // bytes - computed: false, optional: true, required: false
  private _bytes?: string; 
  public get bytes() {
    return this.getStringAttribute('bytes');
  }
  public set bytes(value: string) {
    this._bytes = value;
  }
  public resetBytes() {
    this._bytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesInput() {
    return this._bytes;
  }

  // string - computed: false, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDirectResponse {
  /**
  * Specifies the content of the response body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#body DataK8SNetworkingIstioIoVirtualServiceV1Manifest#body}
  */
  readonly body?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDirectResponseBody;
  /**
  * Specifies the HTTP response status to be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#status DataK8SNetworkingIstioIoVirtualServiceV1Manifest#status}
  */
  readonly status: number;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDirectResponseToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDirectResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDirectResponseBodyToTerraform(struct!.body),
    status: cdktf.numberToTerraform(struct!.status),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDirectResponseToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDirectResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDirectResponseBodyToHclTerraform(struct!.body),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDirectResponseBody",
    },
    status: {
      value: cdktf.numberToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDirectResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDirectResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDirectResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body.internalValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body.internalValue = value.body;
      this._status = value.status;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDirectResponseBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDirectResponseBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // status - computed: false, optional: false, required: true
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultAbortPercentage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#value DataK8SNetworkingIstioIoVirtualServiceV1Manifest#value}
  */
  readonly value?: number;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultAbortPercentageToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultAbortPercentage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultAbortPercentageToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultAbortPercentage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultAbortPercentageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultAbortPercentage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultAbortPercentage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultAbort {
  /**
  * GRPC status code to use to abort the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#grpc_status DataK8SNetworkingIstioIoVirtualServiceV1Manifest#grpc_status}
  */
  readonly grpcStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#http2_error DataK8SNetworkingIstioIoVirtualServiceV1Manifest#http2_error}
  */
  readonly http2Error?: string;
  /**
  * HTTP status code to use to abort the Http request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#http_status DataK8SNetworkingIstioIoVirtualServiceV1Manifest#http_status}
  */
  readonly httpStatus?: number;
  /**
  * Percentage of requests to be aborted with the error code provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#percentage DataK8SNetworkingIstioIoVirtualServiceV1Manifest#percentage}
  */
  readonly percentage?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultAbortPercentage;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultAbortToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultAbort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc_status: cdktf.stringToTerraform(struct!.grpcStatus),
    http2_error: cdktf.stringToTerraform(struct!.http2Error),
    http_status: cdktf.numberToTerraform(struct!.httpStatus),
    percentage: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultAbortPercentageToTerraform(struct!.percentage),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultAbortToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultAbort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grpc_status: {
      value: cdktf.stringToHclTerraform(struct!.grpcStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http2_error: {
      value: cdktf.stringToHclTerraform(struct!.http2Error),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_status: {
      value: cdktf.numberToHclTerraform(struct!.httpStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percentage: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultAbortPercentageToHclTerraform(struct!.percentage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultAbortPercentage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultAbortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultAbort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpcStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcStatus = this._grpcStatus;
    }
    if (this._http2Error !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2Error = this._http2Error;
    }
    if (this._httpStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatus = this._httpStatus;
    }
    if (this._percentage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultAbort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._grpcStatus = undefined;
      this._http2Error = undefined;
      this._httpStatus = undefined;
      this._percentage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._grpcStatus = value.grpcStatus;
      this._http2Error = value.http2Error;
      this._httpStatus = value.httpStatus;
      this._percentage.internalValue = value.percentage;
    }
  }

  // grpc_status - computed: false, optional: true, required: false
  private _grpcStatus?: string; 
  public get grpcStatus() {
    return this.getStringAttribute('grpc_status');
  }
  public set grpcStatus(value: string) {
    this._grpcStatus = value;
  }
  public resetGrpcStatus() {
    this._grpcStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcStatusInput() {
    return this._grpcStatus;
  }

  // http2_error - computed: false, optional: true, required: false
  private _http2Error?: string; 
  public get http2Error() {
    return this.getStringAttribute('http2_error');
  }
  public set http2Error(value: string) {
    this._http2Error = value;
  }
  public resetHttp2Error() {
    this._http2Error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2ErrorInput() {
    return this._http2Error;
  }

  // http_status - computed: false, optional: true, required: false
  private _httpStatus?: number; 
  public get httpStatus() {
    return this.getNumberAttribute('http_status');
  }
  public set httpStatus(value: number) {
    this._httpStatus = value;
  }
  public resetHttpStatus() {
    this._httpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusInput() {
    return this._httpStatus;
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultAbortPercentageOutputReference(this, "percentage");
  public get percentage() {
    return this._percentage;
  }
  public putPercentage(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultAbortPercentage) {
    this._percentage.internalValue = value;
  }
  public resetPercentage() {
    this._percentage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage.internalValue;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultDelayPercentage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#value DataK8SNetworkingIstioIoVirtualServiceV1Manifest#value}
  */
  readonly value?: number;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultDelayPercentageToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultDelayPercentage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultDelayPercentageToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultDelayPercentage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultDelayPercentageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultDelayPercentage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultDelayPercentage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultDelay {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#exponential_delay DataK8SNetworkingIstioIoVirtualServiceV1Manifest#exponential_delay}
  */
  readonly exponentialDelay?: string;
  /**
  * Add a fixed delay before forwarding the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#fixed_delay DataK8SNetworkingIstioIoVirtualServiceV1Manifest#fixed_delay}
  */
  readonly fixedDelay?: string;
  /**
  * Percentage of requests on which the delay will be injected (0-100).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#percent DataK8SNetworkingIstioIoVirtualServiceV1Manifest#percent}
  */
  readonly percent?: number;
  /**
  * Percentage of requests on which the delay will be injected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#percentage DataK8SNetworkingIstioIoVirtualServiceV1Manifest#percentage}
  */
  readonly percentage?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultDelayPercentage;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultDelayToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultDelay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exponential_delay: cdktf.stringToTerraform(struct!.exponentialDelay),
    fixed_delay: cdktf.stringToTerraform(struct!.fixedDelay),
    percent: cdktf.numberToTerraform(struct!.percent),
    percentage: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultDelayPercentageToTerraform(struct!.percentage),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultDelayToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultDelay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exponential_delay: {
      value: cdktf.stringToHclTerraform(struct!.exponentialDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fixed_delay: {
      value: cdktf.stringToHclTerraform(struct!.fixedDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percent: {
      value: cdktf.numberToHclTerraform(struct!.percent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percentage: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultDelayPercentageToHclTerraform(struct!.percentage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultDelayPercentage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultDelay | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exponentialDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.exponentialDelay = this._exponentialDelay;
    }
    if (this._fixedDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedDelay = this._fixedDelay;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    if (this._percentage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultDelay | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exponentialDelay = undefined;
      this._fixedDelay = undefined;
      this._percent = undefined;
      this._percentage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exponentialDelay = value.exponentialDelay;
      this._fixedDelay = value.fixedDelay;
      this._percent = value.percent;
      this._percentage.internalValue = value.percentage;
    }
  }

  // exponential_delay - computed: false, optional: true, required: false
  private _exponentialDelay?: string; 
  public get exponentialDelay() {
    return this.getStringAttribute('exponential_delay');
  }
  public set exponentialDelay(value: string) {
    this._exponentialDelay = value;
  }
  public resetExponentialDelay() {
    this._exponentialDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exponentialDelayInput() {
    return this._exponentialDelay;
  }

  // fixed_delay - computed: false, optional: true, required: false
  private _fixedDelay?: string; 
  public get fixedDelay() {
    return this.getStringAttribute('fixed_delay');
  }
  public set fixedDelay(value: string) {
    this._fixedDelay = value;
  }
  public resetFixedDelay() {
    this._fixedDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedDelayInput() {
    return this._fixedDelay;
  }

  // percent - computed: false, optional: true, required: false
  private _percent?: number; 
  public get percent() {
    return this.getNumberAttribute('percent');
  }
  public set percent(value: number) {
    this._percent = value;
  }
  public resetPercent() {
    this._percent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultDelayPercentageOutputReference(this, "percentage");
  public get percentage() {
    return this._percentage;
  }
  public putPercentage(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultDelayPercentage) {
    this._percentage.internalValue = value;
  }
  public resetPercentage() {
    this._percentage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage.internalValue;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFault {
  /**
  * Abort Http request attempts and return error codes back to downstream service, giving the impression that the upstream service is faulty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#abort DataK8SNetworkingIstioIoVirtualServiceV1Manifest#abort}
  */
  readonly abort?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultAbort;
  /**
  * Delay requests before forwarding, emulating various failures such as network issues, overloaded upstream service, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#delay DataK8SNetworkingIstioIoVirtualServiceV1Manifest#delay}
  */
  readonly delay?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultDelay;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abort: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultAbortToTerraform(struct!.abort),
    delay: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultDelayToTerraform(struct!.delay),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abort: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultAbortToHclTerraform(struct!.abort),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultAbort",
    },
    delay: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultDelayToHclTerraform(struct!.delay),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultDelay",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abort = this._abort?.internalValue;
    }
    if (this._delay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abort.internalValue = undefined;
      this._delay.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abort.internalValue = value.abort;
      this._delay.internalValue = value.delay;
    }
  }

  // abort - computed: false, optional: true, required: false
  private _abort = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultAbortOutputReference(this, "abort");
  public get abort() {
    return this._abort;
  }
  public putAbort(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultAbort) {
    this._abort.internalValue = value;
  }
  public resetAbort() {
    this._abort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortInput() {
    return this._abort.internalValue;
  }

  // delay - computed: false, optional: true, required: false
  private _delay = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultDelayOutputReference(this, "delay");
  public get delay() {
    return this._delay;
  }
  public putDelay(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultDelay) {
    this._delay.internalValue = value;
  }
  public resetDelay() {
    this._delay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay.internalValue;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#add DataK8SNetworkingIstioIoVirtualServiceV1Manifest#add}
  */
  readonly add?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#remove DataK8SNetworkingIstioIoVirtualServiceV1Manifest#remove}
  */
  readonly remove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#set DataK8SNetworkingIstioIoVirtualServiceV1Manifest#set}
  */
  readonly set?: { [key: string]: string };
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersRequestToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.add),
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.set),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersRequestToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.add),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.set),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._set !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add = undefined;
      this._remove = undefined;
      this._set = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add = value.add;
      this._remove = value.remove;
      this._set = value.set;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: { [key: string]: string }; 
  public get add() {
    return this.getStringMapAttribute('add');
  }
  public set add(value: { [key: string]: string }) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // remove - computed: false, optional: true, required: false
  private _remove?: string[]; 
  public get remove() {
    return this.getListAttribute('remove');
  }
  public set remove(value: string[]) {
    this._remove = value;
  }
  public resetRemove() {
    this._remove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove;
  }

  // set - computed: false, optional: true, required: false
  private _set?: { [key: string]: string }; 
  public get set() {
    return this.getStringMapAttribute('set');
  }
  public set set(value: { [key: string]: string }) {
    this._set = value;
  }
  public resetSet() {
    this._set = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#add DataK8SNetworkingIstioIoVirtualServiceV1Manifest#add}
  */
  readonly add?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#remove DataK8SNetworkingIstioIoVirtualServiceV1Manifest#remove}
  */
  readonly remove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#set DataK8SNetworkingIstioIoVirtualServiceV1Manifest#set}
  */
  readonly set?: { [key: string]: string };
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersResponseToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.add),
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.set),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersResponseToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.add),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.set),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._set !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add = undefined;
      this._remove = undefined;
      this._set = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add = value.add;
      this._remove = value.remove;
      this._set = value.set;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: { [key: string]: string }; 
  public get add() {
    return this.getStringMapAttribute('add');
  }
  public set add(value: { [key: string]: string }) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // remove - computed: false, optional: true, required: false
  private _remove?: string[]; 
  public get remove() {
    return this.getListAttribute('remove');
  }
  public set remove(value: string[]) {
    this._remove = value;
  }
  public resetRemove() {
    this._remove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove;
  }

  // set - computed: false, optional: true, required: false
  private _set?: { [key: string]: string }; 
  public get set() {
    return this.getStringMapAttribute('set');
  }
  public set set(value: { [key: string]: string }) {
    this._set = value;
  }
  public resetSet() {
    this._set = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#request DataK8SNetworkingIstioIoVirtualServiceV1Manifest#request}
  */
  readonly request?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersRequest;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#response DataK8SNetworkingIstioIoVirtualServiceV1Manifest#response}
  */
  readonly response?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersResponse;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersRequestToTerraform(struct!.request),
    response: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersResponseToTerraform(struct!.response),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersRequestToHclTerraform(struct!.request),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersRequest",
    },
    response: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersResponseToHclTerraform(struct!.response),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersResponse",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._request?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request?.internalValue;
    }
    if (this._response?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._request.internalValue = undefined;
      this._response.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._request.internalValue = value.request;
      this._response.internalValue = value.response;
    }
  }

  // request - computed: false, optional: true, required: false
  private _request = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersRequestOutputReference(this, "request");
  public get request() {
    return this._request;
  }
  public putRequest(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersRequest) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }

  // response - computed: false, optional: true, required: false
  private _response = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersResponseOutputReference(this, "response");
  public get response() {
    return this._response;
  }
  public putResponse(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersResponse) {
    this._response.internalValue = value;
  }
  public resetResponse() {
    this._response.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response.internalValue;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchAuthority {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#exact DataK8SNetworkingIstioIoVirtualServiceV1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#prefix DataK8SNetworkingIstioIoVirtualServiceV1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#regex DataK8SNetworkingIstioIoVirtualServiceV1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchAuthorityToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchAuthority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchAuthorityToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchAuthority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchAuthority | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchAuthority | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#exact DataK8SNetworkingIstioIoVirtualServiceV1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#prefix DataK8SNetworkingIstioIoVirtualServiceV1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#regex DataK8SNetworkingIstioIoVirtualServiceV1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchHeadersToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchHeadersToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#exact DataK8SNetworkingIstioIoVirtualServiceV1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#prefix DataK8SNetworkingIstioIoVirtualServiceV1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#regex DataK8SNetworkingIstioIoVirtualServiceV1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchMethodToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchMethodToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#exact DataK8SNetworkingIstioIoVirtualServiceV1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#prefix DataK8SNetworkingIstioIoVirtualServiceV1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#regex DataK8SNetworkingIstioIoVirtualServiceV1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchQueryParamsToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchQueryParamsToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchQueryParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchQueryParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchScheme {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#exact DataK8SNetworkingIstioIoVirtualServiceV1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#prefix DataK8SNetworkingIstioIoVirtualServiceV1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#regex DataK8SNetworkingIstioIoVirtualServiceV1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchSchemeToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchScheme | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchSchemeToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchScheme | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchSchemeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchScheme | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchScheme | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchUri {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#exact DataK8SNetworkingIstioIoVirtualServiceV1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#prefix DataK8SNetworkingIstioIoVirtualServiceV1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#regex DataK8SNetworkingIstioIoVirtualServiceV1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchUriToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchUri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchUriToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchUri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchUriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchUri | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchUri | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchWithoutHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#exact DataK8SNetworkingIstioIoVirtualServiceV1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#prefix DataK8SNetworkingIstioIoVirtualServiceV1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#regex DataK8SNetworkingIstioIoVirtualServiceV1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchWithoutHeadersToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchWithoutHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchWithoutHeadersToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchWithoutHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchWithoutHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchWithoutHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchWithoutHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatch {
  /**
  * HTTP Authority values are case-sensitive and formatted as follows: - 'exact: 'value'' for exact string match - 'prefix: 'value'' for prefix-based match - 'regex: 'value'' for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#authority DataK8SNetworkingIstioIoVirtualServiceV1Manifest#authority}
  */
  readonly authority?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchAuthority;
  /**
  * Names of gateways where the rule should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#gateways DataK8SNetworkingIstioIoVirtualServiceV1Manifest#gateways}
  */
  readonly gateways?: string[];
  /**
  * The header keys must be lowercase and use hyphen as the separator, e.g.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#headers DataK8SNetworkingIstioIoVirtualServiceV1Manifest#headers}
  */
  readonly headers?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchHeaders;
  /**
  * Flag to specify whether the URI matching should be case-insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#ignore_uri_case DataK8SNetworkingIstioIoVirtualServiceV1Manifest#ignore_uri_case}
  */
  readonly ignoreUriCase?: boolean | cdktf.IResolvable;
  /**
  * HTTP Method values are case-sensitive and formatted as follows: - 'exact: 'value'' for exact string match - 'prefix: 'value'' for prefix-based match - 'regex: 'value'' for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#method DataK8SNetworkingIstioIoVirtualServiceV1Manifest#method}
  */
  readonly method?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchMethod;
  /**
  * The name assigned to a match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#name DataK8SNetworkingIstioIoVirtualServiceV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specifies the ports on the host that is being addressed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#port DataK8SNetworkingIstioIoVirtualServiceV1Manifest#port}
  */
  readonly port?: number;
  /**
  * Query parameters for matching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#query_params DataK8SNetworkingIstioIoVirtualServiceV1Manifest#query_params}
  */
  readonly queryParams?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchQueryParams;
  /**
  * URI Scheme values are case-sensitive and formatted as follows: - 'exact: 'value'' for exact string match - 'prefix: 'value'' for prefix-based match - 'regex: 'value'' for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#scheme DataK8SNetworkingIstioIoVirtualServiceV1Manifest#scheme}
  */
  readonly scheme?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchScheme;
  /**
  * One or more labels that constrain the applicability of a rule to source (client) workloads with the given labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#source_labels DataK8SNetworkingIstioIoVirtualServiceV1Manifest#source_labels}
  */
  readonly sourceLabels?: { [key: string]: string };
  /**
  * Source namespace constraining the applicability of a rule to workloads in that namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#source_namespace DataK8SNetworkingIstioIoVirtualServiceV1Manifest#source_namespace}
  */
  readonly sourceNamespace?: string;
  /**
  * The human readable prefix to use when emitting statistics for this route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#stat_prefix DataK8SNetworkingIstioIoVirtualServiceV1Manifest#stat_prefix}
  */
  readonly statPrefix?: string;
  /**
  * URI to match values are case-sensitive and formatted as follows: - 'exact: 'value'' for exact string match - 'prefix: 'value'' for prefix-based match - 'regex: 'value'' for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#uri DataK8SNetworkingIstioIoVirtualServiceV1Manifest#uri}
  */
  readonly uri?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchUri;
  /**
  * withoutHeader has the same syntax with the header, but has opposite meaning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#without_headers DataK8SNetworkingIstioIoVirtualServiceV1Manifest#without_headers}
  */
  readonly withoutHeaders?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchWithoutHeaders;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authority: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchAuthorityToTerraform(struct!.authority),
    gateways: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gateways),
    headers: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchHeadersToTerraform(struct!.headers),
    ignore_uri_case: cdktf.booleanToTerraform(struct!.ignoreUriCase),
    method: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchMethodToTerraform(struct!.method),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    query_params: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchQueryParamsToTerraform(struct!.queryParams),
    scheme: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchSchemeToTerraform(struct!.scheme),
    source_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sourceLabels),
    source_namespace: cdktf.stringToTerraform(struct!.sourceNamespace),
    stat_prefix: cdktf.stringToTerraform(struct!.statPrefix),
    uri: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchUriToTerraform(struct!.uri),
    without_headers: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchWithoutHeadersToTerraform(struct!.withoutHeaders),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authority: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchAuthorityToHclTerraform(struct!.authority),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchAuthority",
    },
    gateways: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.gateways),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    headers: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchHeaders",
    },
    ignore_uri_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreUriCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchMethodToHclTerraform(struct!.method),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchMethod",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_params: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchQueryParamsToHclTerraform(struct!.queryParams),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchQueryParams",
    },
    scheme: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchSchemeToHclTerraform(struct!.scheme),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchScheme",
    },
    source_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sourceLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    source_namespace: {
      value: cdktf.stringToHclTerraform(struct!.sourceNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stat_prefix: {
      value: cdktf.stringToHclTerraform(struct!.statPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchUriToHclTerraform(struct!.uri),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchUri",
    },
    without_headers: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchWithoutHeadersToHclTerraform(struct!.withoutHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchWithoutHeaders",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authority = this._authority?.internalValue;
    }
    if (this._gateways !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateways = this._gateways;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._ignoreUriCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreUriCase = this._ignoreUriCase;
    }
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    if (this._scheme?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme?.internalValue;
    }
    if (this._sourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLabels = this._sourceLabels;
    }
    if (this._sourceNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceNamespace = this._sourceNamespace;
    }
    if (this._statPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.statPrefix = this._statPrefix;
    }
    if (this._uri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri?.internalValue;
    }
    if (this._withoutHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.withoutHeaders = this._withoutHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authority.internalValue = undefined;
      this._gateways = undefined;
      this._headers.internalValue = undefined;
      this._ignoreUriCase = undefined;
      this._method.internalValue = undefined;
      this._name = undefined;
      this._port = undefined;
      this._queryParams.internalValue = undefined;
      this._scheme.internalValue = undefined;
      this._sourceLabels = undefined;
      this._sourceNamespace = undefined;
      this._statPrefix = undefined;
      this._uri.internalValue = undefined;
      this._withoutHeaders.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authority.internalValue = value.authority;
      this._gateways = value.gateways;
      this._headers.internalValue = value.headers;
      this._ignoreUriCase = value.ignoreUriCase;
      this._method.internalValue = value.method;
      this._name = value.name;
      this._port = value.port;
      this._queryParams.internalValue = value.queryParams;
      this._scheme.internalValue = value.scheme;
      this._sourceLabels = value.sourceLabels;
      this._sourceNamespace = value.sourceNamespace;
      this._statPrefix = value.statPrefix;
      this._uri.internalValue = value.uri;
      this._withoutHeaders.internalValue = value.withoutHeaders;
    }
  }

  // authority - computed: false, optional: true, required: false
  private _authority = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchAuthorityOutputReference(this, "authority");
  public get authority() {
    return this._authority;
  }
  public putAuthority(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchAuthority) {
    this._authority.internalValue = value;
  }
  public resetAuthority() {
    this._authority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorityInput() {
    return this._authority.internalValue;
  }

  // gateways - computed: false, optional: true, required: false
  private _gateways?: string[]; 
  public get gateways() {
    return this.getListAttribute('gateways');
  }
  public set gateways(value: string[]) {
    this._gateways = value;
  }
  public resetGateways() {
    this._gateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaysInput() {
    return this._gateways;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // ignore_uri_case - computed: false, optional: true, required: false
  private _ignoreUriCase?: boolean | cdktf.IResolvable; 
  public get ignoreUriCase() {
    return this.getBooleanAttribute('ignore_uri_case');
  }
  public set ignoreUriCase(value: boolean | cdktf.IResolvable) {
    this._ignoreUriCase = value;
  }
  public resetIgnoreUriCase() {
    this._ignoreUriCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUriCaseInput() {
    return this._ignoreUriCase;
  }

  // method - computed: false, optional: true, required: false
  private _method = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchMethod) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchQueryParamsOutputReference(this, "query_params");
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchQueryParams) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchSchemeOutputReference(this, "scheme");
  public get scheme() {
    return this._scheme;
  }
  public putScheme(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchScheme) {
    this._scheme.internalValue = value;
  }
  public resetScheme() {
    this._scheme.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme.internalValue;
  }

  // source_labels - computed: false, optional: true, required: false
  private _sourceLabels?: { [key: string]: string }; 
  public get sourceLabels() {
    return this.getStringMapAttribute('source_labels');
  }
  public set sourceLabels(value: { [key: string]: string }) {
    this._sourceLabels = value;
  }
  public resetSourceLabels() {
    this._sourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLabelsInput() {
    return this._sourceLabels;
  }

  // source_namespace - computed: false, optional: true, required: false
  private _sourceNamespace?: string; 
  public get sourceNamespace() {
    return this.getStringAttribute('source_namespace');
  }
  public set sourceNamespace(value: string) {
    this._sourceNamespace = value;
  }
  public resetSourceNamespace() {
    this._sourceNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNamespaceInput() {
    return this._sourceNamespace;
  }

  // stat_prefix - computed: false, optional: true, required: false
  private _statPrefix?: string; 
  public get statPrefix() {
    return this.getStringAttribute('stat_prefix');
  }
  public set statPrefix(value: string) {
    this._statPrefix = value;
  }
  public resetStatPrefix() {
    this._statPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statPrefixInput() {
    return this._statPrefix;
  }

  // uri - computed: false, optional: true, required: false
  private _uri = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchUriOutputReference(this, "uri");
  public get uri() {
    return this._uri;
  }
  public putUri(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchUri) {
    this._uri.internalValue = value;
  }
  public resetUri() {
    this._uri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri.internalValue;
  }

  // without_headers - computed: false, optional: true, required: false
  private _withoutHeaders = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchWithoutHeadersOutputReference(this, "without_headers");
  public get withoutHeaders() {
    return this._withoutHeaders;
  }
  public putWithoutHeaders(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchWithoutHeaders) {
    this._withoutHeaders.internalValue = value;
  }
  public resetWithoutHeaders() {
    this._withoutHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withoutHeadersInput() {
    return this._withoutHeaders.internalValue;
  }
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatch[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchOutputReference {
    return new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#number DataK8SNetworkingIstioIoVirtualServiceV1Manifest#number}
  */
  readonly number?: number;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorPortToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorPortToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._number = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._number = value.number;
    }
  }

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirror {
  /**
  * The name of a service from the service registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#host DataK8SNetworkingIstioIoVirtualServiceV1Manifest#host}
  */
  readonly host: string;
  /**
  * Specifies the port on the host that is being addressed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#port DataK8SNetworkingIstioIoVirtualServiceV1Manifest#port}
  */
  readonly port?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorPort;
  /**
  * The name of a subset within the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#subset DataK8SNetworkingIstioIoVirtualServiceV1Manifest#subset}
  */
  readonly subset?: string;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorPortToTerraform(struct!.port),
    subset: cdktf.stringToTerraform(struct!.subset),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorPortToHclTerraform(struct!.port),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorPort",
    },
    subset: {
      value: cdktf.stringToHclTerraform(struct!.subset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirror | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port?.internalValue;
    }
    if (this._subset !== undefined) {
      hasAnyValues = true;
      internalValueResult.subset = this._subset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirror | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port.internalValue = undefined;
      this._subset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port.internalValue = value.port;
      this._subset = value.subset;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorPortOutputReference(this, "port");
  public get port() {
    return this._port;
  }
  public putPort(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorPort) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }

  // subset - computed: false, optional: true, required: false
  private _subset?: string; 
  public get subset() {
    return this.getStringAttribute('subset');
  }
  public set subset(value: string) {
    this._subset = value;
  }
  public resetSubset() {
    this._subset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsetInput() {
    return this._subset;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorPercentage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#value DataK8SNetworkingIstioIoVirtualServiceV1Manifest#value}
  */
  readonly value?: number;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorPercentageToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorPercentage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorPercentageToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorPercentage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorPercentageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorPercentage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorPercentage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsDestinationPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#number DataK8SNetworkingIstioIoVirtualServiceV1Manifest#number}
  */
  readonly number?: number;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsDestinationPortToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsDestinationPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsDestinationPortToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsDestinationPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsDestinationPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsDestinationPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsDestinationPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._number = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._number = value.number;
    }
  }

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsDestination {
  /**
  * The name of a service from the service registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#host DataK8SNetworkingIstioIoVirtualServiceV1Manifest#host}
  */
  readonly host: string;
  /**
  * Specifies the port on the host that is being addressed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#port DataK8SNetworkingIstioIoVirtualServiceV1Manifest#port}
  */
  readonly port?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsDestinationPort;
  /**
  * The name of a subset within the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#subset DataK8SNetworkingIstioIoVirtualServiceV1Manifest#subset}
  */
  readonly subset?: string;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsDestinationToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsDestinationPortToTerraform(struct!.port),
    subset: cdktf.stringToTerraform(struct!.subset),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsDestinationToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsDestinationPortToHclTerraform(struct!.port),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsDestinationPort",
    },
    subset: {
      value: cdktf.stringToHclTerraform(struct!.subset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port?.internalValue;
    }
    if (this._subset !== undefined) {
      hasAnyValues = true;
      internalValueResult.subset = this._subset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port.internalValue = undefined;
      this._subset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port.internalValue = value.port;
      this._subset = value.subset;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsDestinationPortOutputReference(this, "port");
  public get port() {
    return this._port;
  }
  public putPort(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsDestinationPort) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }

  // subset - computed: false, optional: true, required: false
  private _subset?: string; 
  public get subset() {
    return this.getStringAttribute('subset');
  }
  public set subset(value: string) {
    this._subset = value;
  }
  public resetSubset() {
    this._subset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsetInput() {
    return this._subset;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsPercentage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#value DataK8SNetworkingIstioIoVirtualServiceV1Manifest#value}
  */
  readonly value?: number;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsPercentageToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsPercentage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsPercentageToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsPercentage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsPercentageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsPercentage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsPercentage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrors {
  /**
  * Destination specifies the target of the mirror operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#destination DataK8SNetworkingIstioIoVirtualServiceV1Manifest#destination}
  */
  readonly destination: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsDestination;
  /**
  * Percentage of the traffic to be mirrored by the 'destination' field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#percentage DataK8SNetworkingIstioIoVirtualServiceV1Manifest#percentage}
  */
  readonly percentage?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsPercentage;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsDestinationToTerraform(struct!.destination),
    percentage: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsPercentageToTerraform(struct!.percentage),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsDestination",
    },
    percentage: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsPercentageToHclTerraform(struct!.percentage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsPercentage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._percentage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._percentage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
      this._percentage.internalValue = value.percentage;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsPercentageOutputReference(this, "percentage");
  public get percentage() {
    return this._percentage;
  }
  public putPercentage(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsPercentage) {
    this._percentage.internalValue = value;
  }
  public resetPercentage() {
    this._percentage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage.internalValue;
  }
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrors[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsOutputReference {
    return new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRedirect {
  /**
  * On a redirect, overwrite the Authority/Host portion of the URL with this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#authority DataK8SNetworkingIstioIoVirtualServiceV1Manifest#authority}
  */
  readonly authority?: string;
  /**
  * On a redirect, dynamically set the port: * FROM_PROTOCOL_DEFAULT: automatically set to 80 for HTTP and 443 for HTTPS. Valid Options: FROM_PROTOCOL_DEFAULT, FROM_REQUEST_PORT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#derive_port DataK8SNetworkingIstioIoVirtualServiceV1Manifest#derive_port}
  */
  readonly derivePort?: string;
  /**
  * On a redirect, overwrite the port portion of the URL with this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#port DataK8SNetworkingIstioIoVirtualServiceV1Manifest#port}
  */
  readonly port?: number;
  /**
  * On a redirect, Specifies the HTTP status code to use in the redirect response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#redirect_code DataK8SNetworkingIstioIoVirtualServiceV1Manifest#redirect_code}
  */
  readonly redirectCode?: number;
  /**
  * On a redirect, overwrite the scheme portion of the URL with this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#scheme DataK8SNetworkingIstioIoVirtualServiceV1Manifest#scheme}
  */
  readonly scheme?: string;
  /**
  * On a redirect, overwrite the Path portion of the URL with this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#uri DataK8SNetworkingIstioIoVirtualServiceV1Manifest#uri}
  */
  readonly uri?: string;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRedirectToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authority: cdktf.stringToTerraform(struct!.authority),
    derive_port: cdktf.stringToTerraform(struct!.derivePort),
    port: cdktf.numberToTerraform(struct!.port),
    redirect_code: cdktf.numberToTerraform(struct!.redirectCode),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRedirectToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authority: {
      value: cdktf.stringToHclTerraform(struct!.authority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    derive_port: {
      value: cdktf.stringToHclTerraform(struct!.derivePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redirect_code: {
      value: cdktf.numberToHclTerraform(struct!.redirectCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authority !== undefined) {
      hasAnyValues = true;
      internalValueResult.authority = this._authority;
    }
    if (this._derivePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.derivePort = this._derivePort;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._redirectCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectCode = this._redirectCode;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authority = undefined;
      this._derivePort = undefined;
      this._port = undefined;
      this._redirectCode = undefined;
      this._scheme = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authority = value.authority;
      this._derivePort = value.derivePort;
      this._port = value.port;
      this._redirectCode = value.redirectCode;
      this._scheme = value.scheme;
      this._uri = value.uri;
    }
  }

  // authority - computed: false, optional: true, required: false
  private _authority?: string; 
  public get authority() {
    return this.getStringAttribute('authority');
  }
  public set authority(value: string) {
    this._authority = value;
  }
  public resetAuthority() {
    this._authority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorityInput() {
    return this._authority;
  }

  // derive_port - computed: false, optional: true, required: false
  private _derivePort?: string; 
  public get derivePort() {
    return this.getStringAttribute('derive_port');
  }
  public set derivePort(value: string) {
    this._derivePort = value;
  }
  public resetDerivePort() {
    this._derivePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get derivePortInput() {
    return this._derivePort;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // redirect_code - computed: false, optional: true, required: false
  private _redirectCode?: number; 
  public get redirectCode() {
    return this.getNumberAttribute('redirect_code');
  }
  public set redirectCode(value: number) {
    this._redirectCode = value;
  }
  public resetRedirectCode() {
    this._redirectCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectCodeInput() {
    return this._redirectCode;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRetries {
  /**
  * Number of retries to be allowed for a given request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#attempts DataK8SNetworkingIstioIoVirtualServiceV1Manifest#attempts}
  */
  readonly attempts?: number;
  /**
  * Timeout per attempt for a given request, including the initial call and any retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#per_try_timeout DataK8SNetworkingIstioIoVirtualServiceV1Manifest#per_try_timeout}
  */
  readonly perTryTimeout?: string;
  /**
  * Specifies the conditions under which retry takes place.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#retry_on DataK8SNetworkingIstioIoVirtualServiceV1Manifest#retry_on}
  */
  readonly retryOn?: string;
  /**
  * Flag to specify whether the retries should retry to other localities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#retry_remote_localities DataK8SNetworkingIstioIoVirtualServiceV1Manifest#retry_remote_localities}
  */
  readonly retryRemoteLocalities?: boolean | cdktf.IResolvable;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRetriesToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRetries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attempts: cdktf.numberToTerraform(struct!.attempts),
    per_try_timeout: cdktf.stringToTerraform(struct!.perTryTimeout),
    retry_on: cdktf.stringToTerraform(struct!.retryOn),
    retry_remote_localities: cdktf.booleanToTerraform(struct!.retryRemoteLocalities),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRetriesToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRetries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attempts: {
      value: cdktf.numberToHclTerraform(struct!.attempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_try_timeout: {
      value: cdktf.stringToHclTerraform(struct!.perTryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_on: {
      value: cdktf.stringToHclTerraform(struct!.retryOn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_remote_localities: {
      value: cdktf.booleanToHclTerraform(struct!.retryRemoteLocalities),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRetriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRetries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.attempts = this._attempts;
    }
    if (this._perTryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.perTryTimeout = this._perTryTimeout;
    }
    if (this._retryOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryOn = this._retryOn;
    }
    if (this._retryRemoteLocalities !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryRemoteLocalities = this._retryRemoteLocalities;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRetries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attempts = undefined;
      this._perTryTimeout = undefined;
      this._retryOn = undefined;
      this._retryRemoteLocalities = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attempts = value.attempts;
      this._perTryTimeout = value.perTryTimeout;
      this._retryOn = value.retryOn;
      this._retryRemoteLocalities = value.retryRemoteLocalities;
    }
  }

  // attempts - computed: false, optional: true, required: false
  private _attempts?: number; 
  public get attempts() {
    return this.getNumberAttribute('attempts');
  }
  public set attempts(value: number) {
    this._attempts = value;
  }
  public resetAttempts() {
    this._attempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptsInput() {
    return this._attempts;
  }

  // per_try_timeout - computed: false, optional: true, required: false
  private _perTryTimeout?: string; 
  public get perTryTimeout() {
    return this.getStringAttribute('per_try_timeout');
  }
  public set perTryTimeout(value: string) {
    this._perTryTimeout = value;
  }
  public resetPerTryTimeout() {
    this._perTryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTryTimeoutInput() {
    return this._perTryTimeout;
  }

  // retry_on - computed: false, optional: true, required: false
  private _retryOn?: string; 
  public get retryOn() {
    return this.getStringAttribute('retry_on');
  }
  public set retryOn(value: string) {
    this._retryOn = value;
  }
  public resetRetryOn() {
    this._retryOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOnInput() {
    return this._retryOn;
  }

  // retry_remote_localities - computed: false, optional: true, required: false
  private _retryRemoteLocalities?: boolean | cdktf.IResolvable; 
  public get retryRemoteLocalities() {
    return this.getBooleanAttribute('retry_remote_localities');
  }
  public set retryRemoteLocalities(value: boolean | cdktf.IResolvable) {
    this._retryRemoteLocalities = value;
  }
  public resetRetryRemoteLocalities() {
    this._retryRemoteLocalities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryRemoteLocalitiesInput() {
    return this._retryRemoteLocalities;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRewriteUriRegexRewrite {
  /**
  * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#match DataK8SNetworkingIstioIoVirtualServiceV1Manifest#match}
  */
  readonly match?: string;
  /**
  * The string that should replace into matching portions of original URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#rewrite DataK8SNetworkingIstioIoVirtualServiceV1Manifest#rewrite}
  */
  readonly rewrite?: string;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRewriteUriRegexRewriteToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRewriteUriRegexRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: cdktf.stringToTerraform(struct!.match),
    rewrite: cdktf.stringToTerraform(struct!.rewrite),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRewriteUriRegexRewriteToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRewriteUriRegexRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rewrite: {
      value: cdktf.stringToHclTerraform(struct!.rewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRewriteUriRegexRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRewriteUriRegexRewrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._rewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewrite = this._rewrite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRewriteUriRegexRewrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match = undefined;
      this._rewrite = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match = value.match;
      this._rewrite = value.rewrite;
    }
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // rewrite - computed: false, optional: true, required: false
  private _rewrite?: string; 
  public get rewrite() {
    return this.getStringAttribute('rewrite');
  }
  public set rewrite(value: string) {
    this._rewrite = value;
  }
  public resetRewrite() {
    this._rewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteInput() {
    return this._rewrite;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRewrite {
  /**
  * rewrite the Authority/Host header with this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#authority DataK8SNetworkingIstioIoVirtualServiceV1Manifest#authority}
  */
  readonly authority?: string;
  /**
  * rewrite the path (or the prefix) portion of the URI with this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#uri DataK8SNetworkingIstioIoVirtualServiceV1Manifest#uri}
  */
  readonly uri?: string;
  /**
  * rewrite the path portion of the URI with the specified regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#uri_regex_rewrite DataK8SNetworkingIstioIoVirtualServiceV1Manifest#uri_regex_rewrite}
  */
  readonly uriRegexRewrite?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRewriteUriRegexRewrite;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRewriteToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authority: cdktf.stringToTerraform(struct!.authority),
    uri: cdktf.stringToTerraform(struct!.uri),
    uri_regex_rewrite: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRewriteUriRegexRewriteToTerraform(struct!.uriRegexRewrite),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRewriteToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authority: {
      value: cdktf.stringToHclTerraform(struct!.authority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri_regex_rewrite: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRewriteUriRegexRewriteToHclTerraform(struct!.uriRegexRewrite),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRewriteUriRegexRewrite",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRewrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authority !== undefined) {
      hasAnyValues = true;
      internalValueResult.authority = this._authority;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._uriRegexRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriRegexRewrite = this._uriRegexRewrite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRewrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authority = undefined;
      this._uri = undefined;
      this._uriRegexRewrite.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authority = value.authority;
      this._uri = value.uri;
      this._uriRegexRewrite.internalValue = value.uriRegexRewrite;
    }
  }

  // authority - computed: false, optional: true, required: false
  private _authority?: string; 
  public get authority() {
    return this.getStringAttribute('authority');
  }
  public set authority(value: string) {
    this._authority = value;
  }
  public resetAuthority() {
    this._authority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorityInput() {
    return this._authority;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // uri_regex_rewrite - computed: false, optional: true, required: false
  private _uriRegexRewrite = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRewriteUriRegexRewriteOutputReference(this, "uri_regex_rewrite");
  public get uriRegexRewrite() {
    return this._uriRegexRewrite;
  }
  public putUriRegexRewrite(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRewriteUriRegexRewrite) {
    this._uriRegexRewrite.internalValue = value;
  }
  public resetUriRegexRewrite() {
    this._uriRegexRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriRegexRewriteInput() {
    return this._uriRegexRewrite.internalValue;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteDestinationPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#number DataK8SNetworkingIstioIoVirtualServiceV1Manifest#number}
  */
  readonly number?: number;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteDestinationPortToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteDestinationPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteDestinationPortToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteDestinationPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteDestinationPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteDestinationPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteDestinationPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._number = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._number = value.number;
    }
  }

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteDestination {
  /**
  * The name of a service from the service registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#host DataK8SNetworkingIstioIoVirtualServiceV1Manifest#host}
  */
  readonly host: string;
  /**
  * Specifies the port on the host that is being addressed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#port DataK8SNetworkingIstioIoVirtualServiceV1Manifest#port}
  */
  readonly port?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteDestinationPort;
  /**
  * The name of a subset within the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#subset DataK8SNetworkingIstioIoVirtualServiceV1Manifest#subset}
  */
  readonly subset?: string;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteDestinationToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteDestinationPortToTerraform(struct!.port),
    subset: cdktf.stringToTerraform(struct!.subset),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteDestinationToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteDestinationPortToHclTerraform(struct!.port),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteDestinationPort",
    },
    subset: {
      value: cdktf.stringToHclTerraform(struct!.subset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port?.internalValue;
    }
    if (this._subset !== undefined) {
      hasAnyValues = true;
      internalValueResult.subset = this._subset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port.internalValue = undefined;
      this._subset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port.internalValue = value.port;
      this._subset = value.subset;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteDestinationPortOutputReference(this, "port");
  public get port() {
    return this._port;
  }
  public putPort(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteDestinationPort) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }

  // subset - computed: false, optional: true, required: false
  private _subset?: string; 
  public get subset() {
    return this.getStringAttribute('subset');
  }
  public set subset(value: string) {
    this._subset = value;
  }
  public resetSubset() {
    this._subset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsetInput() {
    return this._subset;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#add DataK8SNetworkingIstioIoVirtualServiceV1Manifest#add}
  */
  readonly add?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#remove DataK8SNetworkingIstioIoVirtualServiceV1Manifest#remove}
  */
  readonly remove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#set DataK8SNetworkingIstioIoVirtualServiceV1Manifest#set}
  */
  readonly set?: { [key: string]: string };
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersRequestToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.add),
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.set),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersRequestToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.add),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.set),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._set !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add = undefined;
      this._remove = undefined;
      this._set = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add = value.add;
      this._remove = value.remove;
      this._set = value.set;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: { [key: string]: string }; 
  public get add() {
    return this.getStringMapAttribute('add');
  }
  public set add(value: { [key: string]: string }) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // remove - computed: false, optional: true, required: false
  private _remove?: string[]; 
  public get remove() {
    return this.getListAttribute('remove');
  }
  public set remove(value: string[]) {
    this._remove = value;
  }
  public resetRemove() {
    this._remove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove;
  }

  // set - computed: false, optional: true, required: false
  private _set?: { [key: string]: string }; 
  public get set() {
    return this.getStringMapAttribute('set');
  }
  public set set(value: { [key: string]: string }) {
    this._set = value;
  }
  public resetSet() {
    this._set = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#add DataK8SNetworkingIstioIoVirtualServiceV1Manifest#add}
  */
  readonly add?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#remove DataK8SNetworkingIstioIoVirtualServiceV1Manifest#remove}
  */
  readonly remove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#set DataK8SNetworkingIstioIoVirtualServiceV1Manifest#set}
  */
  readonly set?: { [key: string]: string };
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersResponseToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.add),
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.set),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersResponseToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.add),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.set),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._set !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add = undefined;
      this._remove = undefined;
      this._set = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add = value.add;
      this._remove = value.remove;
      this._set = value.set;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: { [key: string]: string }; 
  public get add() {
    return this.getStringMapAttribute('add');
  }
  public set add(value: { [key: string]: string }) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // remove - computed: false, optional: true, required: false
  private _remove?: string[]; 
  public get remove() {
    return this.getListAttribute('remove');
  }
  public set remove(value: string[]) {
    this._remove = value;
  }
  public resetRemove() {
    this._remove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove;
  }

  // set - computed: false, optional: true, required: false
  private _set?: { [key: string]: string }; 
  public get set() {
    return this.getStringMapAttribute('set');
  }
  public set set(value: { [key: string]: string }) {
    this._set = value;
  }
  public resetSet() {
    this._set = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#request DataK8SNetworkingIstioIoVirtualServiceV1Manifest#request}
  */
  readonly request?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersRequest;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#response DataK8SNetworkingIstioIoVirtualServiceV1Manifest#response}
  */
  readonly response?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersResponse;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersRequestToTerraform(struct!.request),
    response: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersResponseToTerraform(struct!.response),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersRequestToHclTerraform(struct!.request),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersRequest",
    },
    response: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersResponseToHclTerraform(struct!.response),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersResponse",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._request?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request?.internalValue;
    }
    if (this._response?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._request.internalValue = undefined;
      this._response.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._request.internalValue = value.request;
      this._response.internalValue = value.response;
    }
  }

  // request - computed: false, optional: true, required: false
  private _request = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersRequestOutputReference(this, "request");
  public get request() {
    return this._request;
  }
  public putRequest(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersRequest) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }

  // response - computed: false, optional: true, required: false
  private _response = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersResponseOutputReference(this, "response");
  public get response() {
    return this._response;
  }
  public putResponse(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersResponse) {
    this._response.internalValue = value;
  }
  public resetResponse() {
    this._response.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response.internalValue;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRoute {
  /**
  * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#destination DataK8SNetworkingIstioIoVirtualServiceV1Manifest#destination}
  */
  readonly destination: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#headers DataK8SNetworkingIstioIoVirtualServiceV1Manifest#headers}
  */
  readonly headers?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeaders;
  /**
  * Weight specifies the relative proportion of traffic to be forwarded to the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#weight DataK8SNetworkingIstioIoVirtualServiceV1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteDestinationToTerraform(struct!.destination),
    headers: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersToTerraform(struct!.headers),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteDestination",
    },
    headers: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeaders",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
      this._headers.internalValue = value.headers;
      this._weight = value.weight;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRoute[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteOutputReference {
    return new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttp {
  /**
  * Cross-Origin Resource Sharing policy (CORS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#cors_policy DataK8SNetworkingIstioIoVirtualServiceV1Manifest#cors_policy}
  */
  readonly corsPolicy?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicy;
  /**
  * Delegate is used to specify the particular VirtualService which can be used to define delegate HTTPRoute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#delegate DataK8SNetworkingIstioIoVirtualServiceV1Manifest#delegate}
  */
  readonly delegate?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDelegate;
  /**
  * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#direct_response DataK8SNetworkingIstioIoVirtualServiceV1Manifest#direct_response}
  */
  readonly directResponse?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDirectResponse;
  /**
  * Fault injection policy to apply on HTTP traffic at the client side.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#fault DataK8SNetworkingIstioIoVirtualServiceV1Manifest#fault}
  */
  readonly fault?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFault;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#headers DataK8SNetworkingIstioIoVirtualServiceV1Manifest#headers}
  */
  readonly headers?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeaders;
  /**
  * Match conditions to be satisfied for the rule to be activated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#match DataK8SNetworkingIstioIoVirtualServiceV1Manifest#match}
  */
  readonly match?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatch[] | cdktf.IResolvable;
  /**
  * Mirror HTTP traffic to a another destination in addition to forwarding the requests to the intended destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#mirror DataK8SNetworkingIstioIoVirtualServiceV1Manifest#mirror}
  */
  readonly mirror?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirror;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#mirror_percent DataK8SNetworkingIstioIoVirtualServiceV1Manifest#mirror_percent}
  */
  readonly mirrorPercent?: number;
  /**
  * Percentage of the traffic to be mirrored by the 'mirror' field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#mirror_percentage DataK8SNetworkingIstioIoVirtualServiceV1Manifest#mirror_percentage}
  */
  readonly mirrorPercentage?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorPercentage;
  /**
  * Specifies the destinations to mirror HTTP traffic in addition to the original destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#mirrors DataK8SNetworkingIstioIoVirtualServiceV1Manifest#mirrors}
  */
  readonly mirrors?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrors[] | cdktf.IResolvable;
  /**
  * The name assigned to the route for debugging purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#name DataK8SNetworkingIstioIoVirtualServiceV1Manifest#name}
  */
  readonly name?: string;
  /**
  * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#redirect DataK8SNetworkingIstioIoVirtualServiceV1Manifest#redirect}
  */
  readonly redirect?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRedirect;
  /**
  * Retry policy for HTTP requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#retries DataK8SNetworkingIstioIoVirtualServiceV1Manifest#retries}
  */
  readonly retries?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRetries;
  /**
  * Rewrite HTTP URIs and Authority headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#rewrite DataK8SNetworkingIstioIoVirtualServiceV1Manifest#rewrite}
  */
  readonly rewrite?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRewrite;
  /**
  * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#route DataK8SNetworkingIstioIoVirtualServiceV1Manifest#route}
  */
  readonly route?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRoute[] | cdktf.IResolvable;
  /**
  * Timeout for HTTP requests, default is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#timeout DataK8SNetworkingIstioIoVirtualServiceV1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cors_policy: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicyToTerraform(struct!.corsPolicy),
    delegate: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDelegateToTerraform(struct!.delegate),
    direct_response: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDirectResponseToTerraform(struct!.directResponse),
    fault: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultToTerraform(struct!.fault),
    headers: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersToTerraform(struct!.headers),
    match: cdktf.listMapper(dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchToTerraform, false)(struct!.match),
    mirror: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorToTerraform(struct!.mirror),
    mirror_percent: cdktf.numberToTerraform(struct!.mirrorPercent),
    mirror_percentage: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorPercentageToTerraform(struct!.mirrorPercentage),
    mirrors: cdktf.listMapper(dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsToTerraform, false)(struct!.mirrors),
    name: cdktf.stringToTerraform(struct!.name),
    redirect: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRedirectToTerraform(struct!.redirect),
    retries: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRetriesToTerraform(struct!.retries),
    rewrite: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRewriteToTerraform(struct!.rewrite),
    route: cdktf.listMapper(dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteToTerraform, false)(struct!.route),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cors_policy: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicyToHclTerraform(struct!.corsPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicy",
    },
    delegate: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDelegateToHclTerraform(struct!.delegate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDelegate",
    },
    direct_response: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDirectResponseToHclTerraform(struct!.directResponse),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDirectResponse",
    },
    fault: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultToHclTerraform(struct!.fault),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFault",
    },
    headers: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeaders",
    },
    match: {
      value: cdktf.listMapperHcl(dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchToHclTerraform, false)(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchList",
    },
    mirror: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorToHclTerraform(struct!.mirror),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirror",
    },
    mirror_percent: {
      value: cdktf.numberToHclTerraform(struct!.mirrorPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mirror_percentage: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorPercentageToHclTerraform(struct!.mirrorPercentage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorPercentage",
    },
    mirrors: {
      value: cdktf.listMapperHcl(dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsToHclTerraform, false)(struct!.mirrors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRedirectToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRedirect",
    },
    retries: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRetriesToHclTerraform(struct!.retries),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRetries",
    },
    rewrite: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRewriteToHclTerraform(struct!.rewrite),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRewrite",
    },
    route: {
      value: cdktf.listMapperHcl(dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteToHclTerraform, false)(struct!.route),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteList",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._corsPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsPolicy = this._corsPolicy?.internalValue;
    }
    if (this._delegate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegate = this._delegate?.internalValue;
    }
    if (this._directResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directResponse = this._directResponse?.internalValue;
    }
    if (this._fault?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fault = this._fault?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._mirror?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirror = this._mirror?.internalValue;
    }
    if (this._mirrorPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorPercent = this._mirrorPercent;
    }
    if (this._mirrorPercentage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorPercentage = this._mirrorPercentage?.internalValue;
    }
    if (this._mirrors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrors = this._mirrors?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    if (this._retries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries?.internalValue;
    }
    if (this._rewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewrite = this._rewrite?.internalValue;
    }
    if (this._route?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route?.internalValue;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._corsPolicy.internalValue = undefined;
      this._delegate.internalValue = undefined;
      this._directResponse.internalValue = undefined;
      this._fault.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._match.internalValue = undefined;
      this._mirror.internalValue = undefined;
      this._mirrorPercent = undefined;
      this._mirrorPercentage.internalValue = undefined;
      this._mirrors.internalValue = undefined;
      this._name = undefined;
      this._redirect.internalValue = undefined;
      this._retries.internalValue = undefined;
      this._rewrite.internalValue = undefined;
      this._route.internalValue = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._corsPolicy.internalValue = value.corsPolicy;
      this._delegate.internalValue = value.delegate;
      this._directResponse.internalValue = value.directResponse;
      this._fault.internalValue = value.fault;
      this._headers.internalValue = value.headers;
      this._match.internalValue = value.match;
      this._mirror.internalValue = value.mirror;
      this._mirrorPercent = value.mirrorPercent;
      this._mirrorPercentage.internalValue = value.mirrorPercentage;
      this._mirrors.internalValue = value.mirrors;
      this._name = value.name;
      this._redirect.internalValue = value.redirect;
      this._retries.internalValue = value.retries;
      this._rewrite.internalValue = value.rewrite;
      this._route.internalValue = value.route;
      this._timeout = value.timeout;
    }
  }

  // cors_policy - computed: false, optional: true, required: false
  private _corsPolicy = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicyOutputReference(this, "cors_policy");
  public get corsPolicy() {
    return this._corsPolicy;
  }
  public putCorsPolicy(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpCorsPolicy) {
    this._corsPolicy.internalValue = value;
  }
  public resetCorsPolicy() {
    this._corsPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsPolicyInput() {
    return this._corsPolicy.internalValue;
  }

  // delegate - computed: false, optional: true, required: false
  private _delegate = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDelegateOutputReference(this, "delegate");
  public get delegate() {
    return this._delegate;
  }
  public putDelegate(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDelegate) {
    this._delegate.internalValue = value;
  }
  public resetDelegate() {
    this._delegate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateInput() {
    return this._delegate.internalValue;
  }

  // direct_response - computed: false, optional: true, required: false
  private _directResponse = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDirectResponseOutputReference(this, "direct_response");
  public get directResponse() {
    return this._directResponse;
  }
  public putDirectResponse(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpDirectResponse) {
    this._directResponse.internalValue = value;
  }
  public resetDirectResponse() {
    this._directResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directResponseInput() {
    return this._directResponse.internalValue;
  }

  // fault - computed: false, optional: true, required: false
  private _fault = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFaultOutputReference(this, "fault");
  public get fault() {
    return this._fault;
  }
  public putFault(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpFault) {
    this._fault.internalValue = value;
  }
  public resetFault() {
    this._fault.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultInput() {
    return this._fault.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatchList(this, "match", false);
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // mirror - computed: false, optional: true, required: false
  private _mirror = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorOutputReference(this, "mirror");
  public get mirror() {
    return this._mirror;
  }
  public putMirror(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirror) {
    this._mirror.internalValue = value;
  }
  public resetMirror() {
    this._mirror.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorInput() {
    return this._mirror.internalValue;
  }

  // mirror_percent - computed: false, optional: true, required: false
  private _mirrorPercent?: number; 
  public get mirrorPercent() {
    return this.getNumberAttribute('mirror_percent');
  }
  public set mirrorPercent(value: number) {
    this._mirrorPercent = value;
  }
  public resetMirrorPercent() {
    this._mirrorPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorPercentInput() {
    return this._mirrorPercent;
  }

  // mirror_percentage - computed: false, optional: true, required: false
  private _mirrorPercentage = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorPercentageOutputReference(this, "mirror_percentage");
  public get mirrorPercentage() {
    return this._mirrorPercentage;
  }
  public putMirrorPercentage(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorPercentage) {
    this._mirrorPercentage.internalValue = value;
  }
  public resetMirrorPercentage() {
    this._mirrorPercentage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorPercentageInput() {
    return this._mirrorPercentage.internalValue;
  }

  // mirrors - computed: false, optional: true, required: false
  private _mirrors = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrorsList(this, "mirrors", false);
  public get mirrors() {
    return this._mirrors;
  }
  public putMirrors(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpMirrors[] | cdktf.IResolvable) {
    this._mirrors.internalValue = value;
  }
  public resetMirrors() {
    this._mirrors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorsInput() {
    return this._mirrors.internalValue;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRedirect) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }

  // retries - computed: false, optional: true, required: false
  private _retries = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRetriesOutputReference(this, "retries");
  public get retries() {
    return this._retries;
  }
  public putRetries(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRetries) {
    this._retries.internalValue = value;
  }
  public resetRetries() {
    this._retries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries.internalValue;
  }

  // rewrite - computed: false, optional: true, required: false
  private _rewrite = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRewriteOutputReference(this, "rewrite");
  public get rewrite() {
    return this._rewrite;
  }
  public putRewrite(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRewrite) {
    this._rewrite.internalValue = value;
  }
  public resetRewrite() {
    this._rewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteInput() {
    return this._rewrite.internalValue;
  }

  // route - computed: false, optional: true, required: false
  private _route = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRouteList(this, "route", false);
  public get route() {
    return this._route;
  }
  public putRoute(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpRoute[] | cdktf.IResolvable) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttp[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpOutputReference {
    return new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpMatch {
  /**
  * IPv4 or IPv6 ip addresses of destination with optional subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#destination_subnets DataK8SNetworkingIstioIoVirtualServiceV1Manifest#destination_subnets}
  */
  readonly destinationSubnets?: string[];
  /**
  * Names of gateways where the rule should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#gateways DataK8SNetworkingIstioIoVirtualServiceV1Manifest#gateways}
  */
  readonly gateways?: string[];
  /**
  * Specifies the port on the host that is being addressed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#port DataK8SNetworkingIstioIoVirtualServiceV1Manifest#port}
  */
  readonly port?: number;
  /**
  * One or more labels that constrain the applicability of a rule to workloads with the given labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#source_labels DataK8SNetworkingIstioIoVirtualServiceV1Manifest#source_labels}
  */
  readonly sourceLabels?: { [key: string]: string };
  /**
  * Source namespace constraining the applicability of a rule to workloads in that namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#source_namespace DataK8SNetworkingIstioIoVirtualServiceV1Manifest#source_namespace}
  */
  readonly sourceNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#source_subnet DataK8SNetworkingIstioIoVirtualServiceV1Manifest#source_subnet}
  */
  readonly sourceSubnet?: string;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpMatchToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationSubnets),
    gateways: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gateways),
    port: cdktf.numberToTerraform(struct!.port),
    source_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sourceLabels),
    source_namespace: cdktf.stringToTerraform(struct!.sourceNamespace),
    source_subnet: cdktf.stringToTerraform(struct!.sourceSubnet),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpMatchToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationSubnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gateways: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.gateways),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sourceLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    source_namespace: {
      value: cdktf.stringToHclTerraform(struct!.sourceNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_subnet: {
      value: cdktf.stringToHclTerraform(struct!.sourceSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationSubnets = this._destinationSubnets;
    }
    if (this._gateways !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateways = this._gateways;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLabels = this._sourceLabels;
    }
    if (this._sourceNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceNamespace = this._sourceNamespace;
    }
    if (this._sourceSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSubnet = this._sourceSubnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationSubnets = undefined;
      this._gateways = undefined;
      this._port = undefined;
      this._sourceLabels = undefined;
      this._sourceNamespace = undefined;
      this._sourceSubnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationSubnets = value.destinationSubnets;
      this._gateways = value.gateways;
      this._port = value.port;
      this._sourceLabels = value.sourceLabels;
      this._sourceNamespace = value.sourceNamespace;
      this._sourceSubnet = value.sourceSubnet;
    }
  }

  // destination_subnets - computed: false, optional: true, required: false
  private _destinationSubnets?: string[]; 
  public get destinationSubnets() {
    return this.getListAttribute('destination_subnets');
  }
  public set destinationSubnets(value: string[]) {
    this._destinationSubnets = value;
  }
  public resetDestinationSubnets() {
    this._destinationSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationSubnetsInput() {
    return this._destinationSubnets;
  }

  // gateways - computed: false, optional: true, required: false
  private _gateways?: string[]; 
  public get gateways() {
    return this.getListAttribute('gateways');
  }
  public set gateways(value: string[]) {
    this._gateways = value;
  }
  public resetGateways() {
    this._gateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaysInput() {
    return this._gateways;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // source_labels - computed: false, optional: true, required: false
  private _sourceLabels?: { [key: string]: string }; 
  public get sourceLabels() {
    return this.getStringMapAttribute('source_labels');
  }
  public set sourceLabels(value: { [key: string]: string }) {
    this._sourceLabels = value;
  }
  public resetSourceLabels() {
    this._sourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLabelsInput() {
    return this._sourceLabels;
  }

  // source_namespace - computed: false, optional: true, required: false
  private _sourceNamespace?: string; 
  public get sourceNamespace() {
    return this.getStringAttribute('source_namespace');
  }
  public set sourceNamespace(value: string) {
    this._sourceNamespace = value;
  }
  public resetSourceNamespace() {
    this._sourceNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNamespaceInput() {
    return this._sourceNamespace;
  }

  // source_subnet - computed: false, optional: true, required: false
  private _sourceSubnet?: string; 
  public get sourceSubnet() {
    return this.getStringAttribute('source_subnet');
  }
  public set sourceSubnet(value: string) {
    this._sourceSubnet = value;
  }
  public resetSourceSubnet() {
    this._sourceSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSubnetInput() {
    return this._sourceSubnet;
  }
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpMatchList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpMatch[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpMatchOutputReference {
    return new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteDestinationPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#number DataK8SNetworkingIstioIoVirtualServiceV1Manifest#number}
  */
  readonly number?: number;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteDestinationPortToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteDestinationPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteDestinationPortToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteDestinationPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteDestinationPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteDestinationPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteDestinationPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._number = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._number = value.number;
    }
  }

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteDestination {
  /**
  * The name of a service from the service registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#host DataK8SNetworkingIstioIoVirtualServiceV1Manifest#host}
  */
  readonly host: string;
  /**
  * Specifies the port on the host that is being addressed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#port DataK8SNetworkingIstioIoVirtualServiceV1Manifest#port}
  */
  readonly port?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteDestinationPort;
  /**
  * The name of a subset within the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#subset DataK8SNetworkingIstioIoVirtualServiceV1Manifest#subset}
  */
  readonly subset?: string;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteDestinationToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteDestinationPortToTerraform(struct!.port),
    subset: cdktf.stringToTerraform(struct!.subset),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteDestinationToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteDestinationPortToHclTerraform(struct!.port),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteDestinationPort",
    },
    subset: {
      value: cdktf.stringToHclTerraform(struct!.subset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port?.internalValue;
    }
    if (this._subset !== undefined) {
      hasAnyValues = true;
      internalValueResult.subset = this._subset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port.internalValue = undefined;
      this._subset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port.internalValue = value.port;
      this._subset = value.subset;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteDestinationPortOutputReference(this, "port");
  public get port() {
    return this._port;
  }
  public putPort(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteDestinationPort) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }

  // subset - computed: false, optional: true, required: false
  private _subset?: string; 
  public get subset() {
    return this.getStringAttribute('subset');
  }
  public set subset(value: string) {
    this._subset = value;
  }
  public resetSubset() {
    this._subset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsetInput() {
    return this._subset;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRoute {
  /**
  * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#destination DataK8SNetworkingIstioIoVirtualServiceV1Manifest#destination}
  */
  readonly destination: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteDestination;
  /**
  * Weight specifies the relative proportion of traffic to be forwarded to the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#weight DataK8SNetworkingIstioIoVirtualServiceV1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteDestinationToTerraform(struct!.destination),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteDestination",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
      this._weight = value.weight;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRoute[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteOutputReference {
    return new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcp {
  /**
  * Match conditions to be satisfied for the rule to be activated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#match DataK8SNetworkingIstioIoVirtualServiceV1Manifest#match}
  */
  readonly match?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpMatch[] | cdktf.IResolvable;
  /**
  * The destination to which the connection should be forwarded to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#route DataK8SNetworkingIstioIoVirtualServiceV1Manifest#route}
  */
  readonly route?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRoute[] | cdktf.IResolvable;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: cdktf.listMapper(dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpMatchToTerraform, false)(struct!.match),
    route: cdktf.listMapper(dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteToTerraform, false)(struct!.route),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: cdktf.listMapperHcl(dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpMatchToHclTerraform, false)(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpMatchList",
    },
    route: {
      value: cdktf.listMapperHcl(dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteToHclTerraform, false)(struct!.route),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._route?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match.internalValue = undefined;
      this._route.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match.internalValue = value.match;
      this._route.internalValue = value.route;
    }
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpMatchList(this, "match", false);
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // route - computed: false, optional: true, required: false
  private _route = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRouteList(this, "route", false);
  public get route() {
    return this._route;
  }
  public putRoute(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpRoute[] | cdktf.IResolvable) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcp[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpOutputReference {
    return new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsMatch {
  /**
  * IPv4 or IPv6 ip addresses of destination with optional subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#destination_subnets DataK8SNetworkingIstioIoVirtualServiceV1Manifest#destination_subnets}
  */
  readonly destinationSubnets?: string[];
  /**
  * Names of gateways where the rule should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#gateways DataK8SNetworkingIstioIoVirtualServiceV1Manifest#gateways}
  */
  readonly gateways?: string[];
  /**
  * Specifies the port on the host that is being addressed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#port DataK8SNetworkingIstioIoVirtualServiceV1Manifest#port}
  */
  readonly port?: number;
  /**
  * SNI (server name indicator) to match on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#sni_hosts DataK8SNetworkingIstioIoVirtualServiceV1Manifest#sni_hosts}
  */
  readonly sniHosts: string[];
  /**
  * One or more labels that constrain the applicability of a rule to workloads with the given labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#source_labels DataK8SNetworkingIstioIoVirtualServiceV1Manifest#source_labels}
  */
  readonly sourceLabels?: { [key: string]: string };
  /**
  * Source namespace constraining the applicability of a rule to workloads in that namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#source_namespace DataK8SNetworkingIstioIoVirtualServiceV1Manifest#source_namespace}
  */
  readonly sourceNamespace?: string;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsMatchToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationSubnets),
    gateways: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gateways),
    port: cdktf.numberToTerraform(struct!.port),
    sni_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sniHosts),
    source_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sourceLabels),
    source_namespace: cdktf.stringToTerraform(struct!.sourceNamespace),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsMatchToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationSubnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gateways: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.gateways),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sni_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sniHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sourceLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    source_namespace: {
      value: cdktf.stringToHclTerraform(struct!.sourceNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationSubnets = this._destinationSubnets;
    }
    if (this._gateways !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateways = this._gateways;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sniHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniHosts = this._sniHosts;
    }
    if (this._sourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLabels = this._sourceLabels;
    }
    if (this._sourceNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceNamespace = this._sourceNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationSubnets = undefined;
      this._gateways = undefined;
      this._port = undefined;
      this._sniHosts = undefined;
      this._sourceLabels = undefined;
      this._sourceNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationSubnets = value.destinationSubnets;
      this._gateways = value.gateways;
      this._port = value.port;
      this._sniHosts = value.sniHosts;
      this._sourceLabels = value.sourceLabels;
      this._sourceNamespace = value.sourceNamespace;
    }
  }

  // destination_subnets - computed: false, optional: true, required: false
  private _destinationSubnets?: string[]; 
  public get destinationSubnets() {
    return this.getListAttribute('destination_subnets');
  }
  public set destinationSubnets(value: string[]) {
    this._destinationSubnets = value;
  }
  public resetDestinationSubnets() {
    this._destinationSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationSubnetsInput() {
    return this._destinationSubnets;
  }

  // gateways - computed: false, optional: true, required: false
  private _gateways?: string[]; 
  public get gateways() {
    return this.getListAttribute('gateways');
  }
  public set gateways(value: string[]) {
    this._gateways = value;
  }
  public resetGateways() {
    this._gateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaysInput() {
    return this._gateways;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // sni_hosts - computed: false, optional: false, required: true
  private _sniHosts?: string[]; 
  public get sniHosts() {
    return this.getListAttribute('sni_hosts');
  }
  public set sniHosts(value: string[]) {
    this._sniHosts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sniHostsInput() {
    return this._sniHosts;
  }

  // source_labels - computed: false, optional: true, required: false
  private _sourceLabels?: { [key: string]: string }; 
  public get sourceLabels() {
    return this.getStringMapAttribute('source_labels');
  }
  public set sourceLabels(value: { [key: string]: string }) {
    this._sourceLabels = value;
  }
  public resetSourceLabels() {
    this._sourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLabelsInput() {
    return this._sourceLabels;
  }

  // source_namespace - computed: false, optional: true, required: false
  private _sourceNamespace?: string; 
  public get sourceNamespace() {
    return this.getStringAttribute('source_namespace');
  }
  public set sourceNamespace(value: string) {
    this._sourceNamespace = value;
  }
  public resetSourceNamespace() {
    this._sourceNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNamespaceInput() {
    return this._sourceNamespace;
  }
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsMatchList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsMatch[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsMatchOutputReference {
    return new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteDestinationPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#number DataK8SNetworkingIstioIoVirtualServiceV1Manifest#number}
  */
  readonly number?: number;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteDestinationPortToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteDestinationPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteDestinationPortToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteDestinationPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteDestinationPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteDestinationPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteDestinationPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._number = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._number = value.number;
    }
  }

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteDestination {
  /**
  * The name of a service from the service registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#host DataK8SNetworkingIstioIoVirtualServiceV1Manifest#host}
  */
  readonly host: string;
  /**
  * Specifies the port on the host that is being addressed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#port DataK8SNetworkingIstioIoVirtualServiceV1Manifest#port}
  */
  readonly port?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteDestinationPort;
  /**
  * The name of a subset within the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#subset DataK8SNetworkingIstioIoVirtualServiceV1Manifest#subset}
  */
  readonly subset?: string;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteDestinationToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteDestinationPortToTerraform(struct!.port),
    subset: cdktf.stringToTerraform(struct!.subset),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteDestinationToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteDestinationPortToHclTerraform(struct!.port),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteDestinationPort",
    },
    subset: {
      value: cdktf.stringToHclTerraform(struct!.subset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port?.internalValue;
    }
    if (this._subset !== undefined) {
      hasAnyValues = true;
      internalValueResult.subset = this._subset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port.internalValue = undefined;
      this._subset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port.internalValue = value.port;
      this._subset = value.subset;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteDestinationPortOutputReference(this, "port");
  public get port() {
    return this._port;
  }
  public putPort(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteDestinationPort) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }

  // subset - computed: false, optional: true, required: false
  private _subset?: string; 
  public get subset() {
    return this.getStringAttribute('subset');
  }
  public set subset(value: string) {
    this._subset = value;
  }
  public resetSubset() {
    this._subset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsetInput() {
    return this._subset;
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRoute {
  /**
  * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#destination DataK8SNetworkingIstioIoVirtualServiceV1Manifest#destination}
  */
  readonly destination: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteDestination;
  /**
  * Weight specifies the relative proportion of traffic to be forwarded to the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#weight DataK8SNetworkingIstioIoVirtualServiceV1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteDestinationToTerraform(struct!.destination),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteDestination",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
      this._weight = value.weight;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRoute[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteOutputReference {
    return new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTls {
  /**
  * Match conditions to be satisfied for the rule to be activated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#match DataK8SNetworkingIstioIoVirtualServiceV1Manifest#match}
  */
  readonly match: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsMatch[] | cdktf.IResolvable;
  /**
  * The destination to which the connection should be forwarded to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#route DataK8SNetworkingIstioIoVirtualServiceV1Manifest#route}
  */
  readonly route?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRoute[] | cdktf.IResolvable;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: cdktf.listMapper(dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsMatchToTerraform, false)(struct!.match),
    route: cdktf.listMapper(dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteToTerraform, false)(struct!.route),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: cdktf.listMapperHcl(dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsMatchToHclTerraform, false)(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsMatchList",
    },
    route: {
      value: cdktf.listMapperHcl(dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteToHclTerraform, false)(struct!.route),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._route?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match.internalValue = undefined;
      this._route.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match.internalValue = value.match;
      this._route.internalValue = value.route;
    }
  }

  // match - computed: false, optional: false, required: true
  private _match = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsMatchList(this, "match", false);
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // route - computed: false, optional: true, required: false
  private _route = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRouteList(this, "route", false);
  public get route() {
    return this._route;
  }
  public putRoute(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsRoute[] | cdktf.IResolvable) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTls[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsOutputReference {
    return new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpec {
  /**
  * A list of namespaces to which this virtual service is exported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#export_to DataK8SNetworkingIstioIoVirtualServiceV1Manifest#export_to}
  */
  readonly exportTo?: string[];
  /**
  * The names of gateways and sidecars that should apply these routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#gateways DataK8SNetworkingIstioIoVirtualServiceV1Manifest#gateways}
  */
  readonly gateways?: string[];
  /**
  * The destination hosts to which traffic is being sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#hosts DataK8SNetworkingIstioIoVirtualServiceV1Manifest#hosts}
  */
  readonly hosts?: string[];
  /**
  * An ordered list of route rules for HTTP traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#http DataK8SNetworkingIstioIoVirtualServiceV1Manifest#http}
  */
  readonly http?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttp[] | cdktf.IResolvable;
  /**
  * An ordered list of route rules for opaque TCP traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#tcp DataK8SNetworkingIstioIoVirtualServiceV1Manifest#tcp}
  */
  readonly tcp?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcp[] | cdktf.IResolvable;
  /**
  * An ordered list of route rule for non-terminated TLS & HTTPS traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#tls DataK8SNetworkingIstioIoVirtualServiceV1Manifest#tls}
  */
  readonly tls?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTls[] | cdktf.IResolvable;
}

export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecToTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_to: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exportTo),
    gateways: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gateways),
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    http: cdktf.listMapper(dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpToTerraform, false)(struct!.http),
    tcp: cdktf.listMapper(dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpToTerraform, false)(struct!.tcp),
    tls: cdktf.listMapper(dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsToTerraform, false)(struct!.tls),
  }
}


export function dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecToHclTerraform(struct?: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_to: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exportTo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gateways: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.gateways),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    http: {
      value: cdktf.listMapperHcl(dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpToHclTerraform, false)(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpList",
    },
    tcp: {
      value: cdktf.listMapperHcl(dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpToHclTerraform, false)(struct!.tcp),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpList",
    },
    tls: {
      value: cdktf.listMapperHcl(dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsToHclTerraform, false)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportTo = this._exportTo;
    }
    if (this._gateways !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateways = this._gateways;
    }
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportTo = undefined;
      this._gateways = undefined;
      this._hosts = undefined;
      this._http.internalValue = undefined;
      this._tcp.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportTo = value.exportTo;
      this._gateways = value.gateways;
      this._hosts = value.hosts;
      this._http.internalValue = value.http;
      this._tcp.internalValue = value.tcp;
      this._tls.internalValue = value.tls;
    }
  }

  // export_to - computed: false, optional: true, required: false
  private _exportTo?: string[]; 
  public get exportTo() {
    return this.getListAttribute('export_to');
  }
  public set exportTo(value: string[]) {
    this._exportTo = value;
  }
  public resetExportTo() {
    this._exportTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportToInput() {
    return this._exportTo;
  }

  // gateways - computed: false, optional: true, required: false
  private _gateways?: string[]; 
  public get gateways() {
    return this.getListAttribute('gateways');
  }
  public set gateways(value: string[]) {
    this._gateways = value;
  }
  public resetGateways() {
    this._gateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaysInput() {
    return this._gateways;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttpList(this, "http", false);
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecHttp[] | cdktf.IResolvable) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcpList(this, "tcp", false);
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTcp[] | cdktf.IResolvable) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecTls[] | cdktf.IResolvable) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest k8s_networking_istio_io_virtual_service_v1_manifest}
*/
export class DataK8SNetworkingIstioIoVirtualServiceV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_networking_istio_io_virtual_service_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SNetworkingIstioIoVirtualServiceV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SNetworkingIstioIoVirtualServiceV1Manifest to import
  * @param importFromId The id of the existing DataK8SNetworkingIstioIoVirtualServiceV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SNetworkingIstioIoVirtualServiceV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_networking_istio_io_virtual_service_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/networking_istio_io_virtual_service_v1_manifest k8s_networking_istio_io_virtual_service_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SNetworkingIstioIoVirtualServiceV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SNetworkingIstioIoVirtualServiceV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_networking_istio_io_virtual_service_v1_manifest',
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
  private _metadata = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpec) {
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
      metadata: dataK8SNetworkingIstioIoVirtualServiceV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestMetadata",
      },
      spec: {
        value: dataK8SNetworkingIstioIoVirtualServiceV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNetworkingIstioIoVirtualServiceV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
