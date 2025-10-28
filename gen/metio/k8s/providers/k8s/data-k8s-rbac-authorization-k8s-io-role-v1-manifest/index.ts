// https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/rbac_authorization_k8s_io_role_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SRbacAuthorizationK8SIoRoleV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/rbac_authorization_k8s_io_role_v1_manifest#metadata DataK8SRbacAuthorizationK8SIoRoleV1Manifest#metadata}
  */
  readonly metadata: DataK8SRbacAuthorizationK8SIoRoleV1ManifestMetadata;
  /**
  * Rules holds all the PolicyRules for this Role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/rbac_authorization_k8s_io_role_v1_manifest#rules DataK8SRbacAuthorizationK8SIoRoleV1Manifest#rules}
  */
  readonly rules?: DataK8SRbacAuthorizationK8SIoRoleV1ManifestRules[] | cdktf.IResolvable;
}
export interface DataK8SRbacAuthorizationK8SIoRoleV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/rbac_authorization_k8s_io_role_v1_manifest#annotations DataK8SRbacAuthorizationK8SIoRoleV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/rbac_authorization_k8s_io_role_v1_manifest#labels DataK8SRbacAuthorizationK8SIoRoleV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/rbac_authorization_k8s_io_role_v1_manifest#name DataK8SRbacAuthorizationK8SIoRoleV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/rbac_authorization_k8s_io_role_v1_manifest#namespace DataK8SRbacAuthorizationK8SIoRoleV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SRbacAuthorizationK8SIoRoleV1ManifestMetadataToTerraform(struct?: DataK8SRbacAuthorizationK8SIoRoleV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SRbacAuthorizationK8SIoRoleV1ManifestMetadataToHclTerraform(struct?: DataK8SRbacAuthorizationK8SIoRoleV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SRbacAuthorizationK8SIoRoleV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRbacAuthorizationK8SIoRoleV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRbacAuthorizationK8SIoRoleV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SRbacAuthorizationK8SIoRoleV1ManifestRules {
  /**
  * APIGroups is the name of the APIGroup that contains the resources. If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed. '' represents the core API group and '*' represents all API groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/rbac_authorization_k8s_io_role_v1_manifest#api_groups DataK8SRbacAuthorizationK8SIoRoleV1Manifest#api_groups}
  */
  readonly apiGroups?: string[];
  /**
  * NonResourceURLs is a set of partial urls that a user should have access to. *s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as 'pods' or 'secrets') or non-resource URL paths (such as '/api'), but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/rbac_authorization_k8s_io_role_v1_manifest#non_resource_urls DataK8SRbacAuthorizationK8SIoRoleV1Manifest#non_resource_urls}
  */
  readonly nonResourceUrls?: string[];
  /**
  * ResourceNames is an optional white list of names that the rule applies to. An empty set means that everything is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/rbac_authorization_k8s_io_role_v1_manifest#resource_names DataK8SRbacAuthorizationK8SIoRoleV1Manifest#resource_names}
  */
  readonly resourceNames?: string[];
  /**
  * Resources is a list of resources this rule applies to. '*' represents all resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/rbac_authorization_k8s_io_role_v1_manifest#resources DataK8SRbacAuthorizationK8SIoRoleV1Manifest#resources}
  */
  readonly resources?: string[];
  /**
  * Verbs is a list of Verbs that apply to ALL the ResourceKinds contained in this rule. '*' represents all verbs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/rbac_authorization_k8s_io_role_v1_manifest#verbs DataK8SRbacAuthorizationK8SIoRoleV1Manifest#verbs}
  */
  readonly verbs: string[];
}

export function dataK8SRbacAuthorizationK8SIoRoleV1ManifestRulesToTerraform(struct?: DataK8SRbacAuthorizationK8SIoRoleV1ManifestRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
    non_resource_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nonResourceUrls),
    resource_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceNames),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    verbs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.verbs),
  }
}


export function dataK8SRbacAuthorizationK8SIoRoleV1ManifestRulesToHclTerraform(struct?: DataK8SRbacAuthorizationK8SIoRoleV1ManifestRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    non_resource_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nonResourceUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    verbs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.verbs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRbacAuthorizationK8SIoRoleV1ManifestRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRbacAuthorizationK8SIoRoleV1ManifestRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups;
    }
    if (this._nonResourceUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonResourceUrls = this._nonResourceUrls;
    }
    if (this._resourceNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceNames = this._resourceNames;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._verbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbs = this._verbs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRbacAuthorizationK8SIoRoleV1ManifestRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroups = undefined;
      this._nonResourceUrls = undefined;
      this._resourceNames = undefined;
      this._resources = undefined;
      this._verbs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroups = value.apiGroups;
      this._nonResourceUrls = value.nonResourceUrls;
      this._resourceNames = value.resourceNames;
      this._resources = value.resources;
      this._verbs = value.verbs;
    }
  }

  // api_groups - computed: false, optional: true, required: false
  private _apiGroups?: string[]; 
  public get apiGroups() {
    return this.getListAttribute('api_groups');
  }
  public set apiGroups(value: string[]) {
    this._apiGroups = value;
  }
  public resetApiGroups() {
    this._apiGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups;
  }

  // non_resource_urls - computed: false, optional: true, required: false
  private _nonResourceUrls?: string[]; 
  public get nonResourceUrls() {
    return this.getListAttribute('non_resource_urls');
  }
  public set nonResourceUrls(value: string[]) {
    this._nonResourceUrls = value;
  }
  public resetNonResourceUrls() {
    this._nonResourceUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonResourceUrlsInput() {
    return this._nonResourceUrls;
  }

  // resource_names - computed: false, optional: true, required: false
  private _resourceNames?: string[]; 
  public get resourceNames() {
    return this.getListAttribute('resource_names');
  }
  public set resourceNames(value: string[]) {
    this._resourceNames = value;
  }
  public resetResourceNames() {
    this._resourceNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNamesInput() {
    return this._resourceNames;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // verbs - computed: false, optional: false, required: true
  private _verbs?: string[]; 
  public get verbs() {
    return this.getListAttribute('verbs');
  }
  public set verbs(value: string[]) {
    this._verbs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verbsInput() {
    return this._verbs;
  }
}

export class DataK8SRbacAuthorizationK8SIoRoleV1ManifestRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SRbacAuthorizationK8SIoRoleV1ManifestRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRbacAuthorizationK8SIoRoleV1ManifestRulesOutputReference {
    return new DataK8SRbacAuthorizationK8SIoRoleV1ManifestRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/rbac_authorization_k8s_io_role_v1_manifest k8s_rbac_authorization_k8s_io_role_v1_manifest}
*/
export class DataK8SRbacAuthorizationK8SIoRoleV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_rbac_authorization_k8s_io_role_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SRbacAuthorizationK8SIoRoleV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SRbacAuthorizationK8SIoRoleV1Manifest to import
  * @param importFromId The id of the existing DataK8SRbacAuthorizationK8SIoRoleV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/rbac_authorization_k8s_io_role_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SRbacAuthorizationK8SIoRoleV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_rbac_authorization_k8s_io_role_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/rbac_authorization_k8s_io_role_v1_manifest k8s_rbac_authorization_k8s_io_role_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SRbacAuthorizationK8SIoRoleV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SRbacAuthorizationK8SIoRoleV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_rbac_authorization_k8s_io_role_v1_manifest',
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
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SRbacAuthorizationK8SIoRoleV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SRbacAuthorizationK8SIoRoleV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SRbacAuthorizationK8SIoRoleV1ManifestRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SRbacAuthorizationK8SIoRoleV1ManifestRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
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
      metadata: dataK8SRbacAuthorizationK8SIoRoleV1ManifestMetadataToTerraform(this._metadata.internalValue),
      rules: cdktf.listMapper(dataK8SRbacAuthorizationK8SIoRoleV1ManifestRulesToTerraform, false)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SRbacAuthorizationK8SIoRoleV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRbacAuthorizationK8SIoRoleV1ManifestMetadata",
      },
      rules: {
        value: cdktf.listMapperHcl(dataK8SRbacAuthorizationK8SIoRoleV1ManifestRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataK8SRbacAuthorizationK8SIoRoleV1ManifestRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
